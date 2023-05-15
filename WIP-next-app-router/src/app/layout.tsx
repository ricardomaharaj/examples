import { ReactNode } from 'react'
import { Header } from '~/comps/header'
import '~/style.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className='col'>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
