import { db } from '../db/db.js'
import { Task } from '../db/models/task.js'

export const tasks = db.getRepository(Task)
