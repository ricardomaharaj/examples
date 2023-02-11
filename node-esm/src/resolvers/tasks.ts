import type { GQL_Mutation } from "../types/gql/mutation.js";
import type { GQL_Query } from "../types/gql/query.js";
import type { GQL_Resolver } from "../types/gql/resolver.js";

import { Task } from "../models/task.js";

import { notFound } from "./errors/not-found.js";

// Queries

const getAllTasks: GQL_Query = async (_, args) => {
  return await Task.findAll();
};

const getTask: GQL_Query = async (_, args) => {
  const task = await Task.findByPk(args.id);
  if (!task) return notFound();
  return task;
};

// Mutations

const newTask: GQL_Mutation = async (_, args) => {
  const task = await Task.create({ task: args.task });
  return task;
};

const editTask: GQL_Mutation = async (_, args) => {
  const task = await Task.findByPk(args.id);
  if (!task) return notFound();
  task.task = args.task;
  await task.save();
  return task;
};

const deleteTask: GQL_Mutation = async (_, args) => {
  const task = await Task.findByPk(args.id);
  if (!task) return notFound();
  await task.destroy();
  return task;
};

export const Tasks: GQL_Resolver = {
  Query: {
    getAllTasks,
    getTask,
  },
  Mutation: {
    newTask,
    editTask,
    deleteTask,
  },
};
