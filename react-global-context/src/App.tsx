import { Beverage } from './comps/beverage'
import { CheckOut } from './comps/checkout'
import { Takeout } from './comps/takeout'
import { Toppings } from './comps/toppings'
import { MainProvider } from './state/main'

export function App() {
  return (
    <>
      <MainProvider>
        <div className='row justify-around'>
          <div className='row'>
            <Beverage />
            <Toppings />
            <Takeout />
          </div>
          <div className='row'>
            <CheckOut />
          </div>
        </div>
      </MainProvider>
    </>
  )
}
