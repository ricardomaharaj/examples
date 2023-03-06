import { useMainContext } from '../state/main'

export function Takeout() {
  const ctx = useMainContext()
  const { takeout, setTakeout } = ctx.takeout

  return (
    <>
      <div className='col'>
        <div className='text-xl'>Takeout? </div>
        <div className='row bg2 rounded-xl p-2'>
          <div className='col my-auto'>
            <div
              onClick={() => setTakeout(!takeout)}
              className={`h-4 w-4 border border-stone-400 ${
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
