import "reflect-metadata";
import {
  Context,
  CustomScalar,
  Field,
  GraphQLModule,
  Query,
  ResolveField,
  Resolver,
  Root,
  Scalar
} from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import {NestFactory} from "@nestjs/core";
import {Module} from "@nestjs/common";
import {ExpressAdapter, NestExpressApplication,} from "@nestjs/platform-express";

import {Post, MainUser, DecimalJSScalar} from "./prisma/generated/type-graphql";
import {PrismaClient} from "./prisma/generated/client";
import {ResolversModule} from "./resolvers.module";
import * as TypeGraphQL from "@nestjs/graphql";



// import GraphQLJSON from "graphql-type-json";
import {GraphQLJSON} from "graphql-scalars";




interface Context {
  prisma: PrismaClient;
}

// custom resolver for custom business logic using Prisma Client
// @Resolver(of => MainUser)
// class CustomUserResolver {
//   @Query(returns => MainUser, { nullable: true })
//   async bestUser(@Context() { prisma }: Context): Promise<MainUser | null> {
//     return await prisma.user.findFirst({
//       where: { email: "bob@prisma.io" },
//     }) as MainUser;
//   }
//
//   @ResolveField(type => Post, { nullable: true })
//   async favoritePost(
//     @Root() user: MainUser,
//     @Context() { prisma }: Context,
//   ): Promise<Post | undefined> {
//     const [favoritePost] = await prisma.user
//       .findUnique({ where: { id: user.id } })
//       .posts({ take: 1 });
//
//     return favoritePost;
//   }
// }



@TypeGraphQL.ObjectType("Test", {
  isAbstract: true,
  description: "Test model doc"
})
export class Test {
  @Field((type) => GraphQLJSON)
  info!: JSON;
}

// custom resolver for custom business logic using Prisma Client
@Resolver(() => Test)
class CustomTestResolver {
  @Query(returns => Test, { nullable: true })
   bestTest(@Context() { prisma }: Context): Test | null {
    return {info: {foo: "bar"}} as any
  }
}

@Module({
  providers: [CustomTestResolver],
})
export class TestModule {
}


async function main() {
  const prisma = new PrismaClient();
  console.log(GraphQLJSON)
  @Module({
    imports: [
      GraphQLModule.forRoot({
          autoSchemaFile: 'generated-schema.graphql',
          sortSchema: true,
          // resolvers: { JSON: GraphQLJSON, Decimal: DecimalJSScalar },
          resolvers: {JSON: GraphQLJSON},
          context: (): Context => ({ prisma }),
      }),
      // ResolversModule
      TestModule
    ],
    providers: [

      // register all resolvers inside `providers` of the Nest module
      // CustomTestResolver,
      // CustomUserResolver,
    ],
  })
  class AppModule {}

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  await app.listen(4000);
  console.log(`GraphQL is listening on 4000!`);
}

main().catch(console.error);
