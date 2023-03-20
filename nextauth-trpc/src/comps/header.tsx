import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export function Header() {
  const { data, status } = useSession()
  const authenticated = status === 'authenticated'
  return (
    <>
      <div className='row'>
        <Link href='/'>Home</Link>
        {authenticated ? (
          <>
            <Link href='/dashboard'>Dashboard</Link>
            <div>{data?.user?.name}</div>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <>
            <button onClick={() => signIn('google')}>Sign In</button>
          </>
        )}
      </div>
    </>
  )
}
