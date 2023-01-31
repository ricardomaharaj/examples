import { useState } from 'react'

export function useToppings() {
  let [toppings, setToppings] = useState<string[]>([])

  let addTopping = (topping: string) => {
    if (topping) {
      let i = toppings.indexOf(topping)
      if (i === -1) {
        setToppings([...toppings, topping])
      }
    }
  }

  let removeTopping = (topping: string) => {
    let i = toppings.indexOf(topping)
    if (i !== -1) {
      toppings.splice(i, 1)
      setToppings([...toppings])
    }
  }

  let toppingSelected = (topping: string) => toppings.indexOf(topping) !== -1

  let toggleTopping = (topping: string) => {
    if (toppingSelected(topping)) {
      removeTopping(topping)
    } else {
      addTopping(topping)
    }
  }

  return { toppings, toppingSelected, toggleTopping }
}
