import { db } from '../db'
import { Task } from '../models/task'

export const task = db.getRepository(Task)
