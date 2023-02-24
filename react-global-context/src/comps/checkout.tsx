import { useMainContext } from '../state/main'

export function CheckOut() {
  const { beverage } = useMainContext().beverage
  const { toppings } = useMainContext().toppings
  const { takeout } = useMainContext().takeout

  return (
    <>
      <div className='col bg2 w-[300px] rounded-xl p-2'>
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
