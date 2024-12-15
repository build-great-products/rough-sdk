import { errorBoundary } from '@stayradiated/error-boundary'

import type { Note } from '#src/types.ts'

type DeleteNoteOptions = {
  baseUrl: string
  apiToken: string

  noteId: string
}

const deleteNote = async (
  options: DeleteNoteOptions,
): Promise<Note | Error> => {
  const { baseUrl, apiToken, noteId } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL(`/api/v1/note/${noteId}`, baseUrl), {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${apiToken}`,
      },
    })
    if (!response.ok) {
      return new Error(
        `Failed to delete note: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Note>
  })
}

export { deleteNote }
