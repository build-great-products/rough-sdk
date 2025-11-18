import { test as anyTest, describe } from 'vitest'
import { client, createAsset, getWorkspace } from './index.ts'
import { useGlobalAgent } from './test/use-global-agent.ts'

const MOCK_ROUGH_BASE_URL = 'https://mock.rough.app.localhost'
const ROUGH_API_KEY = 'mock-rough-api-key'

const test = anyTest.extend({
  agent: useGlobalAgent({ origin: MOCK_ROUGH_BASE_URL }),
})

client.setConfig({
  baseUrl: MOCK_ROUGH_BASE_URL,
  auth: () => ROUGH_API_KEY,
})

describe('getWorkspace', () => {
  test('should get current workspace', async ({ expect, agent }) => {
    agent
      .intercept({
        method: 'GET',
        path: '/api/v1/workspace/current',
      })
      .reply(
        200,
        JSON.stringify({
          id: 'mock-workspace-id',
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

    const result = await getWorkspace()

    expect(result).toStrictEqual({
      request: expect.any(Object),
      response: expect.any(Object),
      data: {
        id: 'mock-workspace-id',
      },
    })
  })

  test('should return error if request fails', async ({ expect, agent }) => {
    agent
      .intercept({
        method: 'GET',
        path: '/api/v1/workspace/current',
      })
      .reply(
        500,
        JSON.stringify({
          message: 'Internal Server Error',
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

    const result = await getWorkspace()

    expect(result).toStrictEqual({
      request: expect.any(Object),
      response: expect.any(Object),
      error: {
        message: 'Internal Server Error',
      },
    })
  })
})

describe('File Upload', () => {
  test('should create a pending upload', async ({ expect, agent }) => {
    agent
      .intercept({
        method: 'POST',
        path: '/api/v1/asset',
      })
      .reply(
        200,
        JSON.stringify({
          url: 'http://localhost:8080/files/mock-upload-token',
          tusUploadToken: 'mock-upload-token',
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

    const result = await createAsset({
      body: {
        file: new File(['hello world'], 'hello.txt', { type: 'text/plain' }),
      },
    })

    expect(result).toStrictEqual({
      request: expect.any(Object),
      response: expect.any(Object),
      data: {
        url: 'http://localhost:8080/files/mock-upload-token',
        tusUploadToken: 'mock-upload-token',
      },
    })
  })
})
