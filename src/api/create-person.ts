import { errorBoundary } from '@stayradiated/error-boundary'

import type { Person } from '#src/types.ts'

type CreatePersonOptions = {
  baseUrl: string
  apiToken: string

  name: string
}

const createPerson = async (
  options: CreatePersonOptions,
): Promise<Person | Error> => {
  const { baseUrl, apiToken, name } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/person', baseUrl), {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    })
    if (!response.ok) {
      return new Error(
        `Failed to create person: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Person>
  })
}

export { createPerson }
