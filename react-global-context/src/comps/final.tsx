import { useGlobalCtx } from '@/state/global'

export function Final() {
  const ctx = useGlobalCtx()
  const { count } = ctx.counter
  const { input } = ctx.input
  const { firstName, lastName, email, password } = ctx.form.state
  return (
    <>
      <div className='col'>
        <div>Results: </div>
        <div className='row'>
          <div>counter value:</div>
          <div>{count}</div>
        </div>
        <div className='row'>
          <div>input value:</div>
          <div>{input}</div>
        </div>
        <div>form values:</div>
        <div className='col'>
          <div>firstName: {firstName}</div>
          <div>lastName: {lastName}</div>
          <div>email: {email}</div>
          <div>password: {password}</div>
        </div>
      </div>
    </>
  )
}
