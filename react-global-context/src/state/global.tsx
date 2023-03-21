import { createContext, ReactNode, useContext } from 'react'
import { useCounter } from './counter'
import { useForm } from './form'
import { useInput } from './input'

type TGlobalCtx = {
  counter: ReturnType<typeof useCounter>
  input: ReturnType<typeof useInput>
  form: ReturnType<typeof useForm>
}

const GlobalCtx = createContext<TGlobalCtx | null>(null)

export const useGlobalCtx = () => useContext(GlobalCtx)!

export function GlobalCtxProvider(props: { children: ReactNode }) {
  const value: TGlobalCtx = {
    counter: useCounter(),
    input: useInput(),
    form: useForm(),
  }
  return <GlobalCtx.Provider value={value}>{props.children}</GlobalCtx.Provider>
}
