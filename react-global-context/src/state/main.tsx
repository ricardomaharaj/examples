import { createContext, ReactNode, useContext } from 'react'
import { useBeverage } from './beverage'
import { useTakeout } from './takeout'
import { useToppings } from './toppings'

type MainContext = {
  beverage: ReturnType<typeof useBeverage>
  toppings: ReturnType<typeof useToppings>
  takeout: ReturnType<typeof useTakeout>
}

let mainContext = createContext<MainContext | null>(null)

export function useMainContext() {
  let ctx = useContext(mainContext)!
  return ctx
}

export function MainProvider(props: { children?: ReactNode }) {
  let value: MainContext = {
    beverage: useBeverage(),
    toppings: useToppings(),
    takeout: useTakeout()
  }

  return (
    <mainContext.Provider value={value}>{props.children}</mainContext.Provider>
  )
}
