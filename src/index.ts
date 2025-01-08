import { client } from './api/index.ts'

client.setConfig({
  baseUrl: 'https://in.rough.app',
})

export * from './api/index.ts'
export * from './oauth2.ts'
export * from './upload-file.ts'
