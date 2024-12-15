import { errorBoundary } from '@stayradiated/error-boundary'

import type { Customer } from '#src/types.ts'

type GetCustomerListOptions = {
  baseUrl: string
  apiToken: string
}

const getCustomerList = async (
  options: GetCustomerListOptions,
): Promise<Customer[] | Error> => {
  const { baseUrl, apiToken } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/customer', baseUrl), {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiToken}`,
      },
    })
    if (!response.ok) {
      return new Error(
        `Failed to get customer list: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Customer[]>
  })
}

export { getCustomerList }
