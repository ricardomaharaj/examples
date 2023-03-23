import { createContext, ReactNode, useContext, useReducer } from 'react'

const initState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

type Form = typeof initState
type FormKey = keyof Form

type Action = {
  key: FormKey
  payload: string
}

function reducer(form: Form, action: Action) {
  const { key, payload } = action
  form[key] = payload
  return { ...form }
}

function useForm() {
  const [form, setForm] = useReducer(reducer, initState)
  return { form, setForm }
}

type TFormCtx = ReturnType<typeof useForm>

const FormCtx = createContext<TFormCtx | null>(null)

export const useFormCtx = () => useContext(FormCtx)!

export function FormCtxProvider(props: { children: ReactNode }) {
  const value: TFormCtx = useForm()
  return <FormCtx.Provider value={value}>{props.children}</FormCtx.Provider>
}
