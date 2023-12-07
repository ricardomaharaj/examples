/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  ID: true,
  String: true,
};
export const generatedSchema = {
  Task: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    updatedAt: { __type: "DateTime!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createTask: { __type: "Task!" },
  },
  query: { __typename: { __type: "String!" }, tasks: { __type: "[Task!]!" } },
  subscription: {},
} as const;

export interface Task {
  __typename?: "Task";
  id: ScalarsEnums["ID"];
  updatedAt: ScalarsEnums["DateTime"];
}

export interface Mutation {
  __typename?: "Mutation";
  createTask: Task;
}

export interface Query {
  __typename?: "Query";
  tasks: Array<Task>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  Task: Task;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "Task";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
