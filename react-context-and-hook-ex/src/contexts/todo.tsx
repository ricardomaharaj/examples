import { createContext, ReactNode, useContext } from 'react'
import { useTodos } from '../hooks/todos'
import { Todo } from '../types/todo'

interface ITodoContext {
  todos: Todo[]
  create: (args: { task: string }) => void
  update: (args: { id: number; task: string }) => void
  remove: (args: { id: number }) => void
}

const TodoContext = createContext<ITodoContext | null>(null)

export const useTodoContext = () => {
  const ctx = useContext(TodoContext)
  if (!ctx) {
    throw new Error('Todo context undefined')
  }
  return ctx
}

export function TodoProvider(props: { children: ReactNode }) {
  const value = useTodos()
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
