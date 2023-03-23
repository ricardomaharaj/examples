import Link from 'next/link'

export function Header() {
  return (
    <>
      <div className='row'>
        <Link href='/'>Home</Link>
        <Link href='/counter'>Counter</Link>
        <Link href='/form'>Form</Link>
      </div>
    </>
  )
}
