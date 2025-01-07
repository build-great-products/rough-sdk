import * as process from 'node:process'
import { describe, test } from 'vitest'

import { getWorkspace } from './index.ts'

const ROUGH_API_KEY = process.env.ROUGH_API_KEY

const headers = {
  Authorization: `Bearer ${ROUGH_API_KEY}`,
}

describe('getWorkspace', () => {
  test('should get current workspace', async ({ expect }) => {
    const result = await getWorkspace({ headers })
    expect(result.error).toBeUndefined()
    expect(result).toMatchObject({
      data: {
        id: expect.any(String),
      },
    })
  })
})
