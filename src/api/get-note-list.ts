import { errorBoundary } from '@stayradiated/error-boundary'

import type { Note } from '#src/types.ts'

type GetNoteListOptions = {
  baseUrl: string
  apiToken: string
}

const getNoteList = async (
  options: GetNoteListOptions,
): Promise<Note[] | Error> => {
  const { baseUrl, apiToken } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/note', baseUrl), {
      method: 'GET',
      headers: {
        authorization: `Bearer ${apiToken}`,
      },
    })
    if (!response.ok) {
      return new Error(
        `Failed to get note list: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Note[]>
  })
}

export { getNoteList }
