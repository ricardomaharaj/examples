import { Fragment } from 'react'
import { Single } from '../comps/single'

export function Multiple() {
  return (
    <>
      <div className='my-2'>
        <div>multiple comps each with the same request only fire once</div>
        <div>see network tab in dev tools</div>
      </div>
      <div className='col space-y-2'>
        {Array(9)
          .fill(<Fragment />)
          .map((x, i) => (
            <Single key={i} />
          ))}
      </div>
    </>
  )
}
