import { PageConfig } from 'next'
import { yoga } from '~/server/gql/yoga'

// https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-nextjs#using-legacy-pages-directory
export const config: PageConfig = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

export default yoga
