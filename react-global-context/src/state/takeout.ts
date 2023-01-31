import { useState } from 'react'

export function useTakeout() {
  let [takeout, setTakeout] = useState(false)

  return { takeout, setTakeout }
}
