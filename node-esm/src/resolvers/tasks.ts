import { GraphQLError } from 'graphql'

import type { Resolver } from '../types/resolver.js'

import { Task } from '../db/models/task.js'

const getAllTasks: Resolver = async () => {
  return await Task.findAll()
}

const getTask: Resolver = async (_, args) => {
  const task = await Task.findByPk(args.id)
  if (!task) throw new GraphQLError('not found')
  return task
}

const newTask: Resolver = async (_, args) => {
  const task = await Task.create({ task: args.task })
  return task
}

const editTask: Resolver = async (_, args) => {
  const task = await Task.findByPk(args.id)
  if (!task) throw new GraphQLError('not found')
  task.task = args.task
  await task.save()
  return task
}

const deleteTask: Resolver = async (_, args) => {
  const task = await Task.findByPk(args.id)
  if (!task) throw new GraphQLError('not found')
  await task.destroy()
  return task
}

export const tasks = {
  Query: {
    getAllTasks,
    getTask
  },
  Mutation: {
    newTask,
    editTask,
    deleteTask
  }
}
