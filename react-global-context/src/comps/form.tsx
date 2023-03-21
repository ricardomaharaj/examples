import { useGlobalCtx } from '@/state/global'

export function Form() {
  const ctx = useGlobalCtx()
  const { setState } = ctx.form
  return (
    <>
      <div className='col'>
        <div>Form: </div>
        <div className='row'>
          <input
            type='text'
            placeholder='First Name'
            onChange={(e) =>
              setState({ key: 'firstName', payload: e.currentTarget.value })
            }
          />
          <input
            type='text'
            placeholder='Last Name'
            onChange={(e) =>
              setState({ key: 'lastName', payload: e.currentTarget.value })
            }
          />
        </div>
        <div className='col'>
          <input
            type='email'
            placeholder='Email'
            onChange={(e) =>
              setState({ key: 'email', payload: e.currentTarget.value })
            }
          />
          <input
            type='password'
            placeholder='password'
            onChange={(e) =>
              setState({ key: 'password', payload: e.currentTarget.value })
            }
          />
        </div>
      </div>
    </>
  )
}
