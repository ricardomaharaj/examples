import { useState } from 'react'
import { Beverage } from '../types/beverage'

export function useBeverage() {
  let [beverage, setBeverage] = useState<Beverage>()

  let isBeverageSelected = (name: string) => beverage?.name === name

  return { beverage, setBeverage, isBeverageSelected }
}
