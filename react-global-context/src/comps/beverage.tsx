import { beverages } from '../consts/beverages'
import { useMainContext } from '../state/main'

export function Beverage() {
  const { setBeverage, isBeverageSelected } = useMainContext().beverage

  return (
    <>
      <div className='col'>
        <div className='text-xl'>Beverage:</div>
        <div className='col'>
          {beverages.map(({ name, price }) => (
            <button
              className={`row bg2 justify-between rounded-xl p-2 ${
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
