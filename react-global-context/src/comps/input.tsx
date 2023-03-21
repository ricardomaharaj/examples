import { useGlobalCtx } from '@/state/global'

export function Input() {
  const ctx = useGlobalCtx()
  const { input, setInput } = ctx.input
  return (
    <>
      <div className='col'>
        <div>Input: </div>
        <input
          type='text'
          placeholder='Input'
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <div>value: {input}</div>
      </div>
    </>
  )
}
