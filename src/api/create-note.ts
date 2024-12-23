import { errorBoundary } from '@stayradiated/error-boundary'

import type { Note } from '#src/types.ts'

type CreateNoteOptions = {
  baseUrl: string
  apiToken: string

  content: string
  contentFormat?: 'plaintext' | 'markdown'
  createdByUserId: string
  referenceId?: string
  personId?: string
  lastModifiedAt?: Date
}

const createNote = async (
  options: CreateNoteOptions,
): Promise<Note | Error> => {
  const {
    baseUrl,
    apiToken,
    content,
    contentFormat,
    createdByUserId,
    referenceId,
    personId,
    lastModifiedAt,
  } = options

  return errorBoundary(async () => {
    const response = await fetch(new URL('/api/v1/note', baseUrl), {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        content,
        contentFormat,
        createdByUserId,
        referenceId,
        personId,
        lastModifiedAt: lastModifiedAt?.toISOString(),
      }),
    })
    if (!response.ok) {
      return new Error(
        `Failed to create note: ${response.status} ${response.statusText}`,
      )
    }
    return response.json() as Promise<Note>
  })
}

export { createNote }
