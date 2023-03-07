import type { Resolver } from '../types/resolver.js'

import { notFound } from './util/not-found.js'
import { TaskModel } from '../db/models/task.js'
import { Task } from '../types/task.js'
import { Logger } from '../util/logger.js'

const getAllTasks: Resolver<Task[]> = async () => {
  Logger.info('tasks.getAllTasks()')
  return await TaskModel.find()
}

const getTaskById: Resolver<Task> = async (_, args) => {
  Logger.info('tasks.getTask()')
  const task = await TaskModel.findById(args.id)
  if (!task) throw notFound()
  return task
}

const createTask: Resolver<boolean> = async (_, args) => {
  Logger.info('tasks.createTask()')
  await TaskModel.create({ task: args.task })
  return true
}

const updateTask: Resolver<boolean> = async (_, args) => {
  Logger.info('tasks.updateTask()')
  const task = await TaskModel.findById(args.id)
  if (!task) throw notFound()
  task.task = args.task
  await task.save()
  return true
}

const deleteTask: Resolver<boolean> = async (_, args) => {
  Logger.info('tasks.deleteTask()')
  const task = await TaskModel.findById(args.id)
  if (!task) throw notFound()
  await task.deleteOne()
  return true
}

export const tasks = {
  Query: {
    getAllTasks,
    getTaskById
  },
  Mutation: {
    createTask,
    updateTask,
    deleteTask
  }
}
