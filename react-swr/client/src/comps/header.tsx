import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
      <div className='row space-x-4 mb-4'>
        <Link to='/'>Index</Link>
        <Link to='/todos'>All Todos</Link>
        <Link to='/todos/create'>Create Todo</Link>
      </div>
    </>
  )
}
