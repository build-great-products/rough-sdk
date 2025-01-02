import { errorBoundary } from '@stayradiated/error-boundary'

import type { Person } from '#src/types.ts'

type GetPersonOptions = {
  baseUrl: string
  apiToken: string

  personId: string
}

const getPerson = async (
  options: GetPersonOptions,
): Promise<Person | Error> => {
  const { baseUrl, apiToken, personId } = options

  return errorBoundary(async () => {
    const response = await fetch(
      new URL(`/api/v1/person/${personId}`, baseUrl),
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

export { getPerson }
