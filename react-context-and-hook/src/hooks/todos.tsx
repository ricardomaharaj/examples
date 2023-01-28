import { useState } from 'react'
import { Todo } from '../types/todo'

export function useTodos() {
  let [todos, setTodos] = useState<Todo[]>([])
  let [id, setID] = useState(1)

  const create = (args: { task: string }) => {
    if (args.task) {
      const todo: Todo = { id, task: args.task }
      setID(id + 1)
      setTodos((prev) => [...prev, todo])
    }
  }

  const update = (args: { id: number; task: string }) => {
    let i = todos.findIndex((todo) => todo.id === args.id)
    if (i !== -1) {
      todos[i].task = args.task
      setTodos([...todos])
    }
  }

  const remove = (args: { id: number }) => {
    let i = todos.findIndex((todo) => todo.id === args.id)
    if (i !== -1) {
      todos.splice(i, 1)
      setTodos([...todos])
    }
  }

  return { todos, create, update, remove }
}
