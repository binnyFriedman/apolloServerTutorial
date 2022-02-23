import { Neo4jGraphQL } from "@neo4j/graphql";

import { ApolloServer } from "apollo-server";

require("dotenv").config();

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
`;
const schema = new Neo4jGraphQL({
  typeDefs,
}).getSchema();

export async function newServer(context: any): Promise<ApolloServer> {
  const server: ApolloServer = new ApolloServer({
    schema: await schema,
    context,
  });
  return server;
}
