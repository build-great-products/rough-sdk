import { errorBoundary } from '@stayradiated/error-boundary'

import type { Person } from '#src/types.ts'

type GetPersonListOptions = {
  baseUrl: string
  apiToken: string
}

const getPersonList = async (
  options: GetPersonListOptions,
): Promise<Person[] | Error> => {
  const { baseUrl, apiToken } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/person', baseUrl), {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiToken}`,
      },
    })
    if (!response.ok) {
      return new Error(
        `Failed to get person list: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Person[]>
  })
}

export { getPersonList }
