import { createClient } from '@hey-api/openapi-ts'

createClient({
  input: 'https://in.rough.app/api/v1/openapi.json',
  // input: 'http://localhost:5173/api/v1/openapi.json',
  output: 'src/api',
  plugins: ['@hey-api/client-fetch'],
})
