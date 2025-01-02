import { errorBoundary } from '@stayradiated/error-boundary'

import type { Person } from '#src/types.ts'

type GetPersonListOptions = {
  baseUrl: string
  apiToken: string

  where?: {
    name?: string
    email?: string
    description?: string
  }
}

const getPersonList = async (
  options: GetPersonListOptions,
): Promise<Person[] | Error> => {
  const { baseUrl, apiToken, where = {} } = options

  return errorBoundary(async () => {
    const url = new URL('/api/v1/person', baseUrl)
    if (typeof where.name === 'string') {
      url.searchParams.set('name', where.name)
    }
    if (typeof where.email === 'string') {
      url.searchParams.set('email', where.email)
    }
    if (typeof where.description === 'string') {
      url.searchParams.set('description', where.description)
    }

    const response = await fetch(url, {
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
