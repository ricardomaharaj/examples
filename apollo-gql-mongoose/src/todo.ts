import mongoose from 'mongoose'

interface ITodo {
  id: string
  task: string
}

const TodoSchema = new mongoose.Schema<ITodo>({
  task: { type: String }
})

export const Todo = mongoose.model<ITodo>('Todo', TodoSchema)
