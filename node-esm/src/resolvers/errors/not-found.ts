import { GraphQLError } from "graphql";

export function notFound() {
  throw new GraphQLError("not found", { extensions: { code: 404 } });
}
