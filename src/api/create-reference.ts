import { errorBoundary } from '@stayradiated/error-boundary'

import type { Reference } from '#src/types.ts'

type CreateReferenceOptions = {
  baseUrl: string
  apiToken: string

  name: string
  url: string
}

const createReference = async (
  options: CreateReferenceOptions,
): Promise<Reference | Error> => {
  const { baseUrl, apiToken, name, url } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/reference', baseUrl), {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        url,
      }),
    })
    if (!response.ok) {
      return new Error(
        `Failed to create reference: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Reference>
  })
}

export { createReference }
