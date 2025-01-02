import { errorBoundary } from '@stayradiated/error-boundary'

import type { Person } from '#src/types.ts'

type GetPersonOptions = {
  baseUrl: string
  apiToken: string

  email: string
}

const getPersonByEmail = async (
  options: GetPersonOptions,
): Promise<Person | Error> => {
  const { baseUrl, apiToken, email } = options

  return errorBoundary(async () => {
    const response = await fetch(
      new URL(`/api/v1/person/email/${email}`, baseUrl),
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${apiToken}`,
        },
      },
    )
    if (!response.ok) {
      return new Error(
        `Failed to get person: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Person>
  })
}

export { getPersonByEmail }
