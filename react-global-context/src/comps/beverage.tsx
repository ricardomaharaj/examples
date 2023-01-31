import { beverages } from '../consts/beverages'
import { useMainContext } from '../state/main'

export function Beverage() {
  let { setBeverage, isBeverageSelected } = useMainContext().beverage

  return (
    <>
      <div className='col'>
        <div className='text-xl'>Beverage:</div>
        <div className='col'>
          {beverages.map(({ name, price }) => (
            <button
              className={`row justify-between bg2 p-2 rounded-xl ${
                isBeverageSelected(name) && 'bg4'
              }`}
              onClick={() => setBeverage({ name, price })}
              key={name}
            >
              <div>{name}</div>
              <div>{price}$</div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
