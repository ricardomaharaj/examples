import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
  const session = useSession()
  const auth = session.status === 'authenticated'

  session.data?.user.id

  return (
    <div>
      {!auth && <button onClick={() => signIn('google')}>Sign In</button>}
      {auth && <button onClick={() => signOut()}>Sign Out</button>}
    </div>
  )
}
