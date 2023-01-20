import { createContext, ReactNode, useContext } from 'react'
import { useTodos } from '../hooks/todos'

type TodoContextType = ReturnType<typeof useTodos>

const TodoContext = createContext<TodoContextType | null>(null)

export const useTodoContext = () => {
  const ctx = useContext(TodoContext)
  if (!ctx) {
    throw new Error('todo context undefined')
  }
  return ctx
}

export function TodoProvider(props: { children: ReactNode }) {
  const value = useTodos()
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
