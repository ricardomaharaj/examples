import { useMainContext } from '../state/main'
import { toppings } from '../consts/toppings'

export function Toppings() {
  let { toppingSelected, toggleTopping } = useMainContext().toppings

  return (
    <>
      <div className='col'>
        <div className='text-xl'>
          Toppings: <span className='text-sm'>0.75$/each</span>{' '}
        </div>
        <div className='col'>
          {toppings.map((topping) => (
            <button
              onClick={() => toggleTopping(topping)}
              className={`row bg2 p-2 rounded-xl ${
                toppingSelected(topping) && 'bg4'
              }`}
              key={topping}
            >
              {topping}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
