import { errorBoundary } from '@stayradiated/error-boundary'

import type { Workspace } from '#src/types.ts'

type GetWorkspaceOptions = {
  baseUrl: string
  apiToken: string

  workspaceId: string
}

const getWorkspace = async (
  options: GetWorkspaceOptions,
): Promise<Workspace | Error> => {
  const { baseUrl, workspaceId, apiToken } = options

  return errorBoundary(async () => {
    const response = await fetch(
      new URL(`/api/v1/workspace/${workspaceId}`, baseUrl),
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${apiToken}`,
        },
      },
    )
    if (!response.ok) {
      return new Error(
        `Failed to get orkspace: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Workspace>
  })
}

export { getWorkspace }
