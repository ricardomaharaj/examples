import { Counter } from '@/comps/counter'
import { Final } from '@/comps/final'
import { Form } from '@/comps/form'
import { Input } from '@/comps/input'

export default function Home() {
  return (
    <>
      <div className='row'>
        <Counter />
        <Input />
        <Form />
        <Final />
      </div>
    </>
  )
}
