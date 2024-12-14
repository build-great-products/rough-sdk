import { errorBoundary } from '@stayradiated/error-boundary'

import type { Customer } from '#src/types.ts'

type CreateCustomerOptions = {
  baseUrl: string
  apiToken: string

  name: string
}

const createCustomer = async (
  options: CreateCustomerOptions,
): Promise<Customer | Error> => {
  const { baseUrl, apiToken, name } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/customer', baseUrl), {
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
        `Failed to create customer: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Customer>
  })
}

export { createCustomer }
