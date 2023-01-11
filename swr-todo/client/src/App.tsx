import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { SWRConfig } from 'swr'
import { fetcher } from './api'

export function App() {
  return (
    <>
      <BrowserRouter>
        <SWRConfig value={{ fetcher }}>
          <div className='col m-2 space-y-2'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </SWRConfig>
      </BrowserRouter>
    </>
  )
}
