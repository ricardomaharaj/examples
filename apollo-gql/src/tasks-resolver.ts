import { Task } from '@prisma/client'
import { prisma } from './prisma.js'

type Args = { id: string; body: string }
type Resolver<T> = (_: any, args: Args) => Promise<T>

const tasks: Resolver<Task[]> = async (_, args) => {
  return await prisma.task.findMany()
}

const task: Resolver<Task> = async (_, args) => {
  return await prisma.task.findUniqueOrThrow({ where: { id: args.id } })
}

const createTask: Resolver<boolean> = async (_, args) => {
  await prisma.task.create({ data: { body: args.body } })
  return true
}

const updateTask: Resolver<boolean> = async (_, args) => {
  await prisma.task.update({
    data: { body: args.body },
    where: { id: args.id },
  })
  return true
}

const deleteTask: Resolver<boolean> = async (_, args) => {
  await prisma.task.delete({ where: { id: args.id } })
  return true
}

export const tasksResolver = {
  Query: {
    tasks,
    task,
  },
  Mutation: {
    createTask,
    updateTask,
    deleteTask,
  },
}
