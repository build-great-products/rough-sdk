import { errorBoundary } from '@stayradiated/error-boundary'

import type { Person } from '#src/types.ts'

type UpsertPersonOptions = {
  baseUrl: string
  apiToken: string

  email: string
  name: string
  description?: string
  image?: string
}

const upsertPersonByEmail = async (
  options: UpsertPersonOptions,
): Promise<Person | Error> => {
  const { baseUrl, apiToken, email, name, description, image } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL(`/api/v1/person/${email}`, baseUrl), {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${apiToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        image,
      }),
    })
    if (!response.ok) {
      return new Error(
        `Failed to upsert person: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Person>
  })
}

export { upsertPersonByEmail }
