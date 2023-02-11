import { GQL_Mutation } from "./mutation.js";
import { GQL_Query } from "./query.js";

export type GQL_Resolver = {
  Query: Record<string, GQL_Query>;
  Mutation: Record<string, GQL_Mutation>;
};
