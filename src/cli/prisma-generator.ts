import { GeneratorOptions } from "@prisma/generator-helper";
import { getDMMF, parseEnvValue } from "@prisma/internals";
import { promises as asyncFs } from "fs";
import path from "path";

import generateCode from "../generator/generate-code";
import removeDir from "../utils/removeDir";
import {
  ExternalGeneratorOptions,
  InternalGeneratorOptions,
} from "../generator/options";
import { toUnixPath } from "../generator/helpers";
import { ALL_EMIT_BLOCK_KINDS } from "../generator/emit-block";
import { parseStringBoolean, parseStringArray } from "./helpers";

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output!);
  await asyncFs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);

  const prismaClientProvider = options.otherGenerators.find(
    it => parseEnvValue(it.provider) === "prisma-client-js",
  )!;
  const prismaClientPath = parseEnvValue(prismaClientProvider.output!);
  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider.previewFeatures,
  });

  const generatorConfig = options.generator.config;
  // TODO: make this type `?-` and `| undefined`
  const externalConfig: ExternalGeneratorOptions = {
    emitDMMF: parseStringBoolean(generatorConfig.emitDMMF as string),
    emitTranspiledCode: parseStringBoolean(
      generatorConfig.emitTranspiledCode as string,
    ),
    simpleResolvers: parseStringBoolean(
      generatorConfig.simpleResolvers as string,
    ),
    useOriginalMapping: parseStringBoolean(
      generatorConfig.useOriginalMapping as string,
    ),
    useUncheckedScalarInputs: parseStringBoolean(
      generatorConfig.useUncheckedScalarInputs as string,
    ),
    emitIdAsIDType: parseStringBoolean(
      generatorConfig.emitIdAsIDType as string,
    ),
    emitOnly: parseStringArray(
      generatorConfig.emitOnly as string,
      "emitOnly",
      ALL_EMIT_BLOCK_KINDS,
    ),
    useSimpleInputs: parseStringBoolean(
      generatorConfig.useSimpleInputs as string,
    ),
    customPrismaImportPath: generatorConfig.customPrismaImportPath as string,
    contextPrismaKey: generatorConfig.contextPrismaKey as string,
  };
  const internalConfig: InternalGeneratorOptions = {
    outputDirPath: outputDir,
    prismaClientPath,
  };

  if (externalConfig.emitDMMF) {
    await Promise.all([
      asyncFs.writeFile(
        path.resolve(outputDir, "./dmmf.json"),
        JSON.stringify(options.dmmf, null, 2),
      ),
      asyncFs.writeFile(
        path.resolve(outputDir, "./prisma-client-dmmf.json"),
        JSON.stringify(prismaClientDmmf, null, 2),
      ),
    ]);
  }

  // TODO: replace with `options.dmmf` when the spec match prisma client output
  await generateCode(prismaClientDmmf, {
    ...externalConfig,
    ...internalConfig,
  });
  return "";
}
