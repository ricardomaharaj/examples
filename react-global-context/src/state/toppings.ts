import { useState } from 'react'

export function useToppings() {
  const [toppings, setToppings] = useState<string[]>([])

  function addTopping(topping: string) {
    if (topping) {
      const i = toppings.indexOf(topping)
      if (i === -1) {
        setToppings([...toppings, topping])
      }
    }
  }

  function removeTopping(topping: string) {
    const i = toppings.indexOf(topping)
    if (i !== -1) {
      toppings.splice(i, 1)
      setToppings([...toppings])
    }
  }

  function isToppingSelected(topping: string) {
    return toppings.indexOf(topping) !== -1
  }

  function toggleTopping(topping: string) {
    if (isToppingSelected(topping)) {
      removeTopping(topping)
    } else {
      addTopping(topping)
    }
  }

  return { toppings, isToppingSelected, toggleTopping }
}
