import { useFormCtx } from '@/state/form'

export function Form() {
  const { form, setForm } = useFormCtx()
  return (
    <>
      <div className='col'>
        <div className='row'>
          <input
            type='text'
            placeholder='First Name'
            onChange={(e) =>
              setForm({ key: 'firstName', payload: e.currentTarget.value })
            }
          />
          <input
            type='text'
            placeholder='Last Name'
            onChange={(e) =>
              setForm({ key: 'lastName', payload: e.currentTarget.value })
            }
          />
        </div>
        <div className='row'>
          <input
            type='email'
            placeholder='Email'
            onChange={(e) =>
              setForm({ key: 'email', payload: e.currentTarget.value })
            }
          />
        </div>
        <div className='row'>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) =>
              setForm({ key: 'password', payload: e.currentTarget.value })
            }
          />
        </div>
      </div>
      <div className='col'>
        <div>firstName: {form.firstName}</div>
        <div>lastName: {form.lastName}</div>
        <div>email: {form.email}</div>
        <div>password: {form.password}</div>
      </div>
    </>
  )
}
