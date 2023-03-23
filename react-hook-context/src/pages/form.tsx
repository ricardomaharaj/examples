import { Form } from '@/comps/form'
import { FormCtxProvider } from '@/state/form'

export default function FormPage() {
  return (
    <>
      <FormCtxProvider>
        <Form />
      </FormCtxProvider>
    </>
  )
}
