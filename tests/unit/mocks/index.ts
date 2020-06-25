import { rest } from 'msw'
import { setupServer } from 'msw/node'
import apiEndpoints from '@/api/endpoints'
import { productListMock } from './productListMock'

const endpoint = `${apiEndpoints.basePath}${apiEndpoints.grocery}`
const mocks = [
  rest.get(endpoint, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productListMock))
  }),
]
const server = setupServer(...mocks)

beforeAll(() => {
  server.listen()
})
afterAll(() => {
  server.close()
})
