import { promises as fs } from "fs";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { getDirectoryStructureString } from "../helpers/structure";
import { generateCodeFromSchema } from "../helpers/generate-code";

describe("structure", () => {
  let outputDirPath: string;
  let complexDatamodel: string;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("regression-structure");
    await fs.mkdir(outputDirPath, { recursive: true });

    complexDatamodel = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }

      model User {
        id    Int      @id @default(autoincrement())
        name  String?
        posts Post[]
      }

      model Post {
        uuid      String  @id @default(cuid())
        content   String
        author    User    @relation(fields: [authorId], references: [id])
        authorId  Int
        color     Color
      }
    `;
  });

  it("should generate proper folders structure and file names for complex datamodel", async () => {
    await generateCodeFromSchema(complexDatamodel, { outputDirPath });
    const directoryStructureString = getDirectoryStructureString(outputDirPath);

    // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
    expect(directoryStructureString).toMatchSnapshot("structure");
  });

  it("should generate *.js and *.d.ts files when emitTranspiledCode is set to true", async () => {
    await generateCodeFromSchema(complexDatamodel, {
      outputDirPath,
      emitTranspiledCode: true,
    });
    const directoryStructureString = getDirectoryStructureString(outputDirPath);

    // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
    expect(directoryStructureString).toMatchSnapshot("structure");
  }, 20000);

  it("should generate proper folders and file names when model is renamed", async () => {
    const schema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }

      /// @@TypeGraphQL.type(name: "RenamedUser")
      model User {
        id    Int      @id @default(autoincrement())
        name  String?
        posts Post[]
      }

      /// @@TypeGraphQL.type(name: "RenamedPost")
      model Post {
        uuid      String  @id @default(cuid())
        content   String
        author    User    @relation(fields: [authorId], references: [id])
        authorId  Int
        color     Color
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const directoryStructureString = getDirectoryStructureString(outputDirPath);

    // FIXME: replace with `.toMatchInlineSnapshot()` when it starts working again
    expect(directoryStructureString).toMatchSnapshot("structure");
  });
});
