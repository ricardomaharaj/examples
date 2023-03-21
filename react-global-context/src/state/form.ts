import { useReducer } from 'react'

const form = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

function reducer(
  state: typeof form,
  action: { key: keyof typeof form; payload: string },
) {
  const { key, payload } = action
  state[key] = payload
  return { ...state }
}

export function useForm() {
  const [state, setState] = useReducer(reducer, form)
  return { state, setState }
}
