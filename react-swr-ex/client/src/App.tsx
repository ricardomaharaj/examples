import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages'
import { SWRConfig } from 'swr'
import { Todos } from './pages/todos'
import { fetcher } from './consts'
import { CreateTodo } from './pages/todos/create'
import { EditTodo } from './pages/todos/edit'
import { Multiple } from './pages/todos/multiple'

export function App() {
  return (
    <>
      <BrowserRouter>
        <SWRConfig value={{ fetcher }}>
          <div className='container mx-auto m-2 xl:w-[60%]'>
            <div className='space-x-4 mb-4'>
              <Link to='/'>Index</Link>
              <Link to='/todos'>All Todos</Link>
              <Link to='/todos/create'>Create Todo</Link>
            </div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/todos' element={<Todos />} />
              <Route path='/todos/:id' element={<EditTodo />} />
              <Route path='/todos/create' element={<CreateTodo />} />
              <Route path='/todos/multiple/:id' element={<Multiple />} />
            </Routes>
          </div>
        </SWRConfig>
      </BrowserRouter>
    </>
  )
}
