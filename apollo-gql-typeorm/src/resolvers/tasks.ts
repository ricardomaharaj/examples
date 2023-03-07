import { Task } from '../db/models/task.js'
import { tasks } from '../controllers/task.js'

import type { Resolver } from '../types/resolver.js'

import { Logger } from '../util/logger.js'
import { notFound } from './util/not-found.js'

const getAllTasks: Resolver<Task[]> = async () => {
  Logger.info('task.getAllTasks()')
  return await tasks.find()
}

const getTaskById: Resolver<Task> = async (_, args) => {
  Logger.info('task.getTaskById()')
  const t = await tasks.findOneBy({ id: args.id })
  if (!t) throw notFound()
  return t
}

const createTask: Resolver<boolean> = async (_, args) => {
  Logger.info('task.createTask()')
  const t = new Task()
  t.task = args.task
  await tasks.save(t)
  return true
}

const updateTask: Resolver<boolean> = async (_, args) => {
  Logger.info('task.updateTask()')
  const t = await tasks.findOneBy({ id: args.id })
  if (!t) throw notFound()
  t.task = args.task
  await tasks.save(t)
  return true
}

const deleteTask: Resolver<boolean> = async (_, args) => {
  Logger.info('task.deleteTask()')
  const t = await tasks.findOneBy({ id: args.id })
  if (!t) throw notFound()
  await tasks.remove(t)
  return true
}

export const task = {
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
