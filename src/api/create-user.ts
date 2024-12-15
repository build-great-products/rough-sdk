import { errorBoundary } from '@stayradiated/error-boundary'

import type { User } from '#src/types.ts'

type CreateUserOptions = {
  baseUrl: string
  apiToken: string

  name: string
  email: string
  image?: string
}

const createUser = async (
  options: CreateUserOptions,
): Promise<User | Error> => {
  const { baseUrl, apiToken, name, email, image } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/user', baseUrl), {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        image,
      }),
    })
    if (!response.ok) {
      return new Error(
        `Failed to create user: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<User>
  })
}

export { createUser }
