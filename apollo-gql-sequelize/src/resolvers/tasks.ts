import type { Resolver } from '../types/resolver.js'

import { Task } from '../db/models/task.js'
import { notFound } from './util/not-found.js'
import { logger } from '../util/logger.js'

const getAllTasks: Resolver<Task[]> = async () => {
  logger('tasks.getAllTasks()')
  return await Task.findAll()
}

const getTask: Resolver<Task> = async (_, args) => {
  logger('tasks.getTask()')
  const task = await Task.findByPk(args.id)
  if (!task) throw notFound()
  return task
}

const createTask: Resolver<boolean> = async (_, args) => {
  logger('tasks.createTask()')
  const task = await Task.create({ task: args.task })
  return true
}

const updateTask: Resolver<boolean> = async (_, args) => {
  logger('tasks.updateTask()')
  const task = await Task.findByPk(args.id)
  if (!task) throw notFound()
  task.task = args.task
  await task.save()
  return true
}

const deleteTask: Resolver<boolean> = async (_, args) => {
  logger('tasks.deleteTask()')
  const task = await Task.findByPk(args.id)
  if (!task) throw notFound()
  await task.destroy()
  return true
}

export const tasks = {
  Query: {
    getAllTasks,
    getTask
  },
  Mutation: {
    createTask,
    updateTask,
    deleteTask
  }
}
