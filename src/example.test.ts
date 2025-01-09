import * as process from 'node:process'
import { describe, test } from 'vitest'

import {
  client,
  createPendingFileUpload,
  getWorkspace,
  uploadFile,
} from './index.ts'

const ROUGH_URL = process.env.ROUGH_URL
const ROUGH_API_KEY = process.env.ROUGH_API_KEY

client.setConfig({
  baseUrl: ROUGH_URL,
  auth: () => ROUGH_API_KEY,
})

describe('getWorkspace', () => {
  test('should get current workspace', async ({ expect }) => {
    const result = await getWorkspace()
    expect(result.error).toBeUndefined()
    expect(result).toMatchObject({
      data: {
        id: expect.any(String),
      },
    })
  })
})

describe('File Upload', () => {
  test('should create a pending upload', async ({ expect }) => {
    const result = await createPendingFileUpload()
    expect(result.error).toBeUndefined()
    expect(result).toMatchObject({
      data: {
        token: expect.any(String),
      },
    })
    const uploadToken = result.data?.token ?? ''

    const { uploadId } = await uploadFile({
      tusServerUrl: 'http://localhost:8080/files/',
      uploadToken,
      data: Buffer.from('Hello, World!'),
      fileName: 'hello.txt',
      mimeType: 'text/plain',
    })
    expect(uploadId).toBeTypeOf('string')
    expect(uploadId).toHaveLength(32)
    console.log('Upload ID:', uploadId)
  })
})
