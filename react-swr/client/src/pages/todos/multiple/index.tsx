import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Single } from '../../../comps/single'

export function Multiple() {
  const { id } = useParams()

  return (
    <>
      <div className='col space-y-2'>
        {Array(9)
          .fill(<Fragment />)
          .map((x, i) => (
            <Single id={id!} key={i} />
          ))}
      </div>
    </>
  )
}
