import {
  component$,
  useComputed$ as $$,
  useSignal,
  useTask$,
} from '@builder.io/qwik'
import { useParams } from '~/hooks/params'

export const Home = component$(() => {
  const { params, rpl } = useParams({
    query: '',
    page: '1',
  })

  const query = useSignal(params.value.query)
  const page = $$(() => parseInt(params.value.page))

  useTask$((ctx) => {
    ctx.track(() => query.value)
    const timer = setTimeout(() => {
      rpl({ query: query.value })
    }, 600)
    ctx.cleanup(() => clearTimeout(timer))
  })

  return (
    <>
      <input type='text' placeholder='Search' bind:value={query} />
      <button onClick$={() => rpl({ page: `${page.value + 1}` })}>
        {page.value}
      </button>
    </>
  )
})
