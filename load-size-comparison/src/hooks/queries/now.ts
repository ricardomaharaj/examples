import { useQuery, gql } from 'urql'

const query = gql`
  {
    now
  }
`

type Data = {
  now: string
}

export const useNow = () => useQuery<Data>({ query })
