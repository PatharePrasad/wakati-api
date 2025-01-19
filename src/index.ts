import {OpenAPIHono} from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'
import { pinoLogger } from 'hono-pino'


const app = new OpenAPIHono()

function logger() {
  return pinoLogger(
    {
      http: { reqId: () => crypto.randomUUID() },
    }
  )
}

app.use(logger())
app.notFound(notFound)
app.onError(onError)


app.get('/', async (c) => {
  return c.json({ message: 'Wakati API is active' })
})



export default app