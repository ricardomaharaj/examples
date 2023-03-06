import { useMainContext } from '../state/main'
import { toppings } from '../consts/toppings'

export function Toppings() {
  const ctx = useMainContext()
  const { isToppingSelected, toggleTopping } = ctx.toppings

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
              className={`row bg2 rounded-xl p-2 ${
                isToppingSelected(topping) && 'bg4'
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
