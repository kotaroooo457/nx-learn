/* eslint-disable */
// prettier-ignore
import { AspidaClient } from 'aspida'
// prettier-ignore
import { MockClient, MockConfig, mockClient } from 'aspida-mock'
// prettier-ignore
import api from './$api'
// prettier-ignore
import mock0 from './shops/index'

// prettier-ignore
export const mockRoutes = () => [
  { path: '/shops', methods: mock0 }
]

// prettier-ignore
export default <U>(client: AspidaClient<U> | MockClient<U>, config?: MockConfig) => {
  const mock = 'attachRoutes' in client ? client : mockClient(client)
  mock.attachRoutes(mockRoutes(), config)

  return api(mock)
}
