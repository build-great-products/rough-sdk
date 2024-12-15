import { errorBoundary } from '@stayradiated/error-boundary'

import type { User } from '#src/types.ts'

type GetUserListOptions = {
  baseUrl: string
  apiToken: string
}

const getUserList = async (
  options: GetUserListOptions,
): Promise<User[] | Error> => {
  const { baseUrl, apiToken } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/user', baseUrl), {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiToken}`,
      },
    })
    if (!response.ok) {
      return new Error(
        `Failed to get user list: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<User[]>
  })
}

export { getUserList }
