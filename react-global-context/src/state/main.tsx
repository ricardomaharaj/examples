import { createContext, ReactNode, useContext } from 'react'
import { useBeverage } from './beverage'
import { useTakeout } from './takeout'
import { useToppings } from './toppings'

type TMainContext = {
  beverage: ReturnType<typeof useBeverage>
  toppings: ReturnType<typeof useToppings>
  takeout: ReturnType<typeof useTakeout>
}

const MainContext = createContext<TMainContext | null>(null)

export const useMainContext = () => useContext(MainContext)!

export function MainProvider(props: { children?: ReactNode }) {
  const value: TMainContext = {
    beverage: useBeverage(),
    toppings: useToppings(),
    takeout: useTakeout()
  }

  return (
    <MainContext.Provider value={value}>{props.children}</MainContext.Provider>
  )
}
