import {Module, Provider} from '@nestjs/common';
// import {resolvers} from "./prisma/generated/type-graphql";
import {CustomScalar, Scalar} from "@nestjs/graphql";
import GraphQLJSON from "graphql-type-json";

@Scalar('JSON', type => Object)
export class JsonScalar implements CustomScalar<string, any> {
  name = GraphQLJSON.name;
  description = GraphQLJSON.description;

  serialize = GraphQLJSON.serialize;
  parseValue = GraphQLJSON.parseValue;
  parseLiteral = GraphQLJSON.parseLiteral;
}

@Module({
  // providers: [JsonScalar, ...(resolvers as [Provider])],
})
export class ResolversModule {
}
