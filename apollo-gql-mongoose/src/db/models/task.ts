import mongoose from 'mongoose'
import { Task } from '../../types/task.js'

const TaskSchema = new mongoose.Schema<Task>({
  task: { type: String },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() }
})

export const TaskModel = mongoose.model<Task>('Task', TaskSchema)
