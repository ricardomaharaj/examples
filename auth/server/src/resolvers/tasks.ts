import { Task } from '../models/task'
import { User } from '../models/user'
import { Resolver } from '../types/resolver'
import { jwtDecode, jwtVerify } from '../util/jwt'

const getTasks: Resolver = async (_, args) => {
  const { jwt } = args

  let user = jwtDecode(jwt) as User | null
  if (!user) return false

  user = await User.findByPk(user.username)
  if (!user) return false

  const tasks = await Task.findAll({
    where: { user: user.username },
    attributes: { exclude: ['user'] },
  })
  if (!tasks) return false

  return tasks
}

const createTask: Resolver = async (_, args) => {
  const { jwt, task } = args

  const jwtUser = jwtVerify(jwt) as User

  const user = await User.findByPk(jwtUser.username)
  if (!user) return false

  const newTask = new Task({
    user: user.username,
    task,
  })

  await newTask.save()

  return newTask
}

export const Tasks = {
  Query: {
    getTasks,
  },
  Mutation: {
    createTask,
  },
}
