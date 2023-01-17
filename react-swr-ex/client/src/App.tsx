import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages'
import { SWRConfig } from 'swr'
import { Todos } from './pages/todos'
import { baseURL } from './consts'
import { CreateTodo } from './pages/create'
import { EditTodo } from './pages/edit'
import { Multiple } from './pages/multiple'

export function App() {
  return (
    <>
      <BrowserRouter>
        <SWRConfig
          value={{
            fetcher: (path: string) =>
              fetch(`${baseURL}${path}`).then((res) => res.json())
          }}
        >
          <div className='container mx-auto m-2 xl:w-[60%]'>
            <div className='space-x-4 mb-4'>
              <Link to='/'>Index</Link>
              <Link to='/todos'>/todos</Link>
              <Link to='/create'>/create</Link>
              <Link to='/multiple'>/multiple</Link>
            </div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/todos' element={<Todos />} />
              <Route path='/todos/:id' element={<EditTodo />} />
              <Route path='/create' element={<CreateTodo />} />
              <Route path='/multiple' element={<Multiple />} />
            </Routes>
          </div>
        </SWRConfig>
      </BrowserRouter>
    </>
  )
}
