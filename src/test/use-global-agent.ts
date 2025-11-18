import { createFactory } from 'test-fixture-factory'
import type { Interceptable as GlobalAgent } from 'undici'
import { MockAgent, setGlobalDispatcher } from 'undici'

// this implementation of `once` intentionally does not support receiving
// arguments, as that increases the risk of misuse. If you need to pass
// arguments to the function, you should use `memoize` instead.
const once = <T>(fn: () => T): (() => T) => {
  let called = false
  let value: T
  return () => {
    if (called) {
      return value
    }
    value = fn()
    called = true
    return value
  }
}

const getGlobalMockAgent = once(() => {
  const agent = new MockAgent()
  agent.disableNetConnect()
  setGlobalDispatcher(agent)
  return agent
})

/*
 * really useful for testing api calls
 *
 * const test = anyTest.extend({
 *   agent: useGlobalAgent({ origin: 'https://example.com' }),
 * })
 *
 * test('should fetch data', async ({ agent }) => {
 *   mock.intercept({ method: 'GET', path: '/api' }).reply(200, 'hello world')
 *
 *   const response = await fetch('https://example.com/api')
 *   const data = await response.text()
 *   console.log(data) // 'hello world'
 * })
 */

const globalAgentFactory = createFactory<GlobalAgent>('GlobalAgent')
  .withSchema((f) => ({
    origin: f.type<string>(),
  }))
  .fixture(async (attrs, use) => {
    const { origin } = attrs
    const globalMockAgent = getGlobalMockAgent()
    const agent = globalMockAgent.get(origin)
    await use(agent)
    await agent.destroy()
  })

const useGlobalAgent = globalAgentFactory.useValue

export { useGlobalAgent }
