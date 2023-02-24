import { useState } from 'react'
import { Beverage } from '../types/beverage'

export function useBeverage() {
  const [beverage, setBeverage] = useState<Beverage>()

  function isBeverageSelected(name: string) {
    return beverage?.name === name
  }

  return { beverage, setBeverage, isBeverageSelected }
}
