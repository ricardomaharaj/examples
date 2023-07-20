import { component$ } from '@builder.io/qwik'
import { Form } from '@builder.io/qwik-city'
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from '~/routes/plugin@auth'

export const Home = component$(() => {
  const session = useAuthSession()
  const user = session.value?.user

  const signIn = useAuthSignin()
  const signOut = useAuthSignout()

  return (
    <>
      {user ? (
        <Form action={signOut}>
          <input type='hidden' name='callbackUrl' value='/' />
          <button>Sign Out</button>
        </Form>
      ) : (
        <Form action={signIn}>
          <input type='hidden' name='providerId' value='google' />
          <input type='hidden' name='options.callbackUrl' value='/' />
          <button>Sign In</button>
        </Form>
      )}
    </>
  )
})
