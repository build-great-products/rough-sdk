import { writeFile } from 'node:fs/promises'
import { createClient } from '@hey-api/openapi-ts'

// production
const schemaUrl = 'https://in.rough.app/api/v1/openapi.json'

// development
// const schemaUrl = 'http://localhost:5173/api/v1/openapi.json'

console.info(`Fetching schema from ${schemaUrl}`)

const schemaResponse = await fetch(schemaUrl)
const schemaJSON = await schemaResponse.json()

console.info(`Writing schema to openapi.json`)

await writeFile('openapi.json', JSON.stringify(schemaJSON, null, 2))

console.info(`Generating client from openapi.json`)

createClient({
  input: 'openapi.json',
  output: 'src/api',
  plugins: ['@hey-api/client-fetch'],
})
