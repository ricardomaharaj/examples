import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
  const session = useSession()
  const auth = session.status === 'authenticated'

  return (
    <>
      {auth ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign In</button>
      )}
    </>
  )
}
