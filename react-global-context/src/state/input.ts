import { useState } from 'react'

export function useInput() {
  const [input, setInput] = useState('')
  return { input, setInput }
}
