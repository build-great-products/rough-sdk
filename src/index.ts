import { client } from './api/client.gen.ts'

client.setConfig({
  baseUrl: 'https://in.rough.app',
})

export { client }
export * from './api/index.ts'
export * from './oauth2.ts'
export * from './upload-file.ts'
