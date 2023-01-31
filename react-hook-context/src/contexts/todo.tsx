import { createContext, ReactNode, useContext } from 'react'
import { useTodos } from '../hooks/todos'

type TTodoContext = ReturnType<typeof useTodos>

const TodoContext = createContext<TTodoContext | null>(null)

export const useTodoContext = () => {
  const ctx = useContext(TodoContext)!
  return ctx
}

export function TodoProvider(props: { children: ReactNode }) {
  const value = useTodos()
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
