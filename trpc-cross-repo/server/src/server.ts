import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { appRouter } from './routers/root.js'
import cors from 'cors'

createHTTPServer({
  router: appRouter,
  middleware: cors(),
}).listen(4000)
