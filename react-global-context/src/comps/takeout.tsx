import { useMainContext } from '../state/main'

export function Takeout() {
  let { takeout, setTakeout } = useMainContext().takeout

  return (
    <>
      <div className='col'>
        <div className='text-xl'>Takeout? </div>
        <div className='row p-2 bg2 rounded-xl'>
          <div className='col my-auto'>
            <div
              onClick={() => setTakeout(!takeout)}
              className={`w-4 h-4 border border-stone-400 ${
                takeout && 'bg-stone-400'
              }`}
            />
          </div>
          <div>Takeout</div>
        </div>
      </div>
    </>
  )
}
