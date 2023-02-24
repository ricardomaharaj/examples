import { useState } from 'react'

export function useTakeout() {
  const [takeout, setTakeout] = useState(false)

  return { takeout, setTakeout }
}
