import { useMainContext } from '../state/main'

export function CheckOut() {
  let { beverage } = useMainContext().beverage
  let { toppings } = useMainContext().toppings
  let { takeout } = useMainContext().takeout

  return (
    <>
      <div className='col w-[300px] bg2 p-2 rounded-xl'>
        <div className='text-2xl'>Checkout</div>
        {beverage?.name && (
          <>
            <div className='text-lg font-bold'>Beverage:</div>
            <div>
              {beverage.name} {beverage.price}$
            </div>
          </>
        )}
        <div className='text-lg font-bold'>Toppings: </div>
        <div className='col'>
          {toppings.map((topping) => (
            <div className='row text-sm' key={topping}>
              {topping}
            </div>
          ))}
        </div>
        <div className='text-lg font-bold'>Takeout?</div>
        <div>{takeout ? 'Yes' : 'No'}</div>
        <div className='text-2xl'>Total: </div>
        <div>{toppings.length * 0.75 + (beverage?.price || 0)}$</div>
      </div>
    </>
  )
}
