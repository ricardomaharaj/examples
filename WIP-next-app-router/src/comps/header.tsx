import Link from 'next/link'

export function Header() {
  return (
    <div className='row'>
      <Link href='/'>Home</Link>
      <Link href='/all-tasks'>All Tasks</Link>
      <Link href='/create-task'>Create Tasks</Link>
    </div>
  )
}
