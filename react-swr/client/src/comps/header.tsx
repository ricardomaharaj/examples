import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
      <div className='row mb-4 space-x-4'>
        <Link to='/'>Index</Link>
        <Link to='/tasks'>All Tasks</Link>
        <Link to='/tasks/create'>Create Task</Link>
      </div>
    </>
  )
}
