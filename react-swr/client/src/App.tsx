import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SWRConfig } from 'swr'

import { fetcher } from './consts'

import { Header } from './comps/header'

import { Home } from './pages'
import { Tasks } from './pages/tasks'
import { CreateTask } from './pages/createTask'
import { EditTask } from './pages/editTask'
import { Multi } from './pages/multi'

export function App() {
  return (
    <>
      <BrowserRouter>
        <SWRConfig value={{ fetcher }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/tasks/create' element={<CreateTask />} />
            <Route path='/tasks/edit/:id' element={<EditTask />} />
            <Route path='/tasks/multi/:id' element={<Multi />} />
          </Routes>
        </SWRConfig>
      </BrowserRouter>
    </>
  )
}
