// This file is auto-generated by @hey-api/openapi-ts

import type {
  Client,
  Options as ClientOptions,
  TDataShape,
} from '@hey-api/client-fetch'
import { client as _heyApiClient } from './client.gen'
import type {
  CreateNoteData,
  CreateNoteErrors,
  CreateNoteResponses,
  CreatePendingFileUploadData,
  CreatePendingFileUploadErrors,
  CreatePendingFileUploadResponses,
  CreatePersonData,
  CreatePersonErrors,
  CreatePersonResponses,
  CreateReferenceData,
  CreateReferenceErrors,
  CreateReferenceResponses,
  CreateUserData,
  CreateUserErrors,
  CreateUserResponses,
  DeleteNoteData,
  DeleteNoteErrors,
  DeleteNoteResponses,
  GetBlockListData,
  GetBlockListErrors,
  GetBlockListResponses,
  GetCommentListData,
  GetCommentListErrors,
  GetCommentListResponses,
  GetContentData,
  GetContentErrors,
  GetContentListData,
  GetContentListErrors,
  GetContentListResponses,
  GetContentResponses,
  GetDocumentData,
  GetDocumentErrors,
  GetDocumentListData,
  GetDocumentListErrors,
  GetDocumentListResponses,
  GetDocumentResponses,
  GetLabelListData,
  GetLabelListErrors,
  GetLabelListResponses,
  GetNoteData,
  GetNoteErrors,
  GetNoteLabelListData,
  GetNoteLabelListErrors,
  GetNoteLabelListResponses,
  GetNoteListData,
  GetNoteListErrors,
  GetNoteListResponses,
  GetNoteResponses,
  GetPersonByEmailData,
  GetPersonByEmailErrors,
  GetPersonByEmailResponses,
  GetPersonData,
  GetPersonErrors,
  GetPersonListData,
  GetPersonListErrors,
  GetPersonListResponses,
  GetPersonResponses,
  GetReferenceListData,
  GetReferenceListErrors,
  GetReferenceListResponses,
  GetSequenceDocumentListData,
  GetSequenceDocumentListErrors,
  GetSequenceDocumentListResponses,
  GetSequenceListData,
  GetSequenceListErrors,
  GetSequenceListResponses,
  GetUserData,
  GetUserErrors,
  GetUserListData,
  GetUserListErrors,
  GetUserListResponses,
  GetUserResponses,
  GetWorkspaceData,
  GetWorkspaceErrors,
  GetWorkspaceResponses,
  UpdatePersonData,
  UpdatePersonErrors,
  UpdatePersonResponses,
} from './types.gen'

export type Options<
  TData extends TDataShape = TDataShape,
  ThrowOnError extends boolean = boolean,
> = ClientOptions<TData, ThrowOnError> & {
  /**
   * You can provide a client instance returned by `createClient()` instead of
   * individual options. This might be also useful if you want to implement a
   * custom client.
   */
  client?: Client
  /**
   * You can pass arbitrary values through the `meta` object. This can be
   * used to access values that aren't defined as part of the SDK function.
   */
  meta?: Record<string, unknown>
}

/**
 * Get block list
 * Get a list of blocks
 */
export const getBlockList = <ThrowOnError extends boolean = false>(
  options?: Options<GetBlockListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetBlockListResponses,
    GetBlockListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/block',
    ...options,
  })
}

/**
 * Get comment list
 * Get a list of comments
 */
export const getCommentList = <ThrowOnError extends boolean = false>(
  options?: Options<GetCommentListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetCommentListResponses,
    GetCommentListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/comment',
    ...options,
  })
}

/**
 * Get content list
 * Get a list of content
 */
export const getContentList = <ThrowOnError extends boolean = false>(
  options?: Options<GetContentListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetContentListResponses,
    GetContentListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/content',
    ...options,
  })
}

/**
 * Get content
 * Get content by its unique identifier
 */
export const getContent = <ThrowOnError extends boolean = false>(
  options: Options<GetContentData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetContentResponses,
    GetContentErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/content/{contentId}',
    ...options,
  })
}

/**
 * List all documents
 * Retrieves a list of all documents accessible to the authenticated user. Optionally includes archived documents.
 */
export const getDocumentList = <ThrowOnError extends boolean = false>(
  options?: Options<GetDocumentListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetDocumentListResponses,
    GetDocumentListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/document',
    ...options,
  })
}

/**
 * Get a document
 * Get a document by its unique identifier
 */
export const getDocument = <ThrowOnError extends boolean = false>(
  options: Options<GetDocumentData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetDocumentResponses,
    GetDocumentErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/document/{documentId}',
    ...options,
  })
}

/**
 * Retrieve a token to upload a file
 * Retrieve a token to upload a file using the tus protocol.
 */
export const createPendingFileUpload = <ThrowOnError extends boolean = false>(
  options?: Options<CreatePendingFileUploadData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<
    CreatePendingFileUploadResponses,
    CreatePendingFileUploadErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/file-upload',
    ...options,
  })
}

/**
 * Get label list
 * Get a list of labels
 */
export const getLabelList = <ThrowOnError extends boolean = false>(
  options?: Options<GetLabelListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetLabelListResponses,
    GetLabelListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/label',
    ...options,
  })
}

/**
 * Get note label list
 * Get a list of note labels
 */
export const getNoteLabelList = <ThrowOnError extends boolean = false>(
  options?: Options<GetNoteLabelListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetNoteLabelListResponses,
    GetNoteLabelListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/note-label',
    ...options,
  })
}

/**
 * Get note list
 * Get a list of notes
 */
export const getNoteList = <ThrowOnError extends boolean = false>(
  options?: Options<GetNoteListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetNoteListResponses,
    GetNoteListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/note',
    ...options,
  })
}

/**
 * Create a note
 * Create a note
 */
export const createNote = <ThrowOnError extends boolean = false>(
  options?: Options<CreateNoteData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<
    CreateNoteResponses,
    CreateNoteErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/note',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Delete a note
 * Delete a note by its unique identifier
 */
export const deleteNote = <ThrowOnError extends boolean = false>(
  options: Options<DeleteNoteData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).delete<
    DeleteNoteResponses,
    DeleteNoteErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/note/{noteId}',
    ...options,
  })
}

/**
 * Get a note
 * Get a note by its unique identifier
 */
export const getNote = <ThrowOnError extends boolean = false>(
  options: Options<GetNoteData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetNoteResponses,
    GetNoteErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/note/{noteId}',
    ...options,
  })
}

/**
 * Get person list
 * Get a list of people
 */
export const getPersonList = <ThrowOnError extends boolean = false>(
  options?: Options<GetPersonListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetPersonListResponses,
    GetPersonListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/person',
    ...options,
  })
}

/**
 * Create person
 * Create a person in the workspace
 */
export const createPerson = <ThrowOnError extends boolean = false>(
  options?: Options<CreatePersonData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<
    CreatePersonResponses,
    CreatePersonErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/person',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Get person
 * Get a person by their ID
 */
export const getPerson = <ThrowOnError extends boolean = false>(
  options: Options<GetPersonData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetPersonResponses,
    GetPersonErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/person/{personId}',
    ...options,
  })
}

/**
 * Update person
 * Update a person in the workspace. The person must already exist in the workspace.
 */
export const updatePerson = <ThrowOnError extends boolean = false>(
  options: Options<UpdatePersonData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).put<
    UpdatePersonResponses,
    UpdatePersonErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/person/{personId}',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
}

/**
 * Get person by email
 * Get a person by their email address
 */
export const getPersonByEmail = <ThrowOnError extends boolean = false>(
  options: Options<GetPersonByEmailData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetPersonByEmailResponses,
    GetPersonByEmailErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/person/email/{email}',
    ...options,
  })
}

/**
 * Get reference list
 * Get a list of references
 */
export const getReferenceList = <ThrowOnError extends boolean = false>(
  options?: Options<GetReferenceListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetReferenceListResponses,
    GetReferenceListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/reference',
    ...options,
  })
}

/**
 * Create reference
 * Create a reference in the workspace
 */
export const createReference = <ThrowOnError extends boolean = false>(
  options?: Options<CreateReferenceData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<
    CreateReferenceResponses,
    CreateReferenceErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/reference',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Get sequence document list
 * Get a list of sequence documents
 */
export const getSequenceDocumentList = <ThrowOnError extends boolean = false>(
  options?: Options<GetSequenceDocumentListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetSequenceDocumentListResponses,
    GetSequenceDocumentListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/sequence-document',
    ...options,
  })
}

/**
 * Get sequence list
 * Get a list of sequences
 */
export const getSequenceList = <ThrowOnError extends boolean = false>(
  options?: Options<GetSequenceListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetSequenceListResponses,
    GetSequenceListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/sequence',
    ...options,
  })
}

/**
 * Get user list
 * Get a list of users
 */
export const getUserList = <ThrowOnError extends boolean = false>(
  options?: Options<GetUserListData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetUserListResponses,
    GetUserListErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/user',
    ...options,
  })
}

/**
 * Create user
 * Create a user in the workspace
 */
export const createUser = <ThrowOnError extends boolean = false>(
  options?: Options<CreateUserData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<
    CreateUserResponses,
    CreateUserErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/user',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
}

/**
 * Get user
 * Get a user
 */
export const getUser = <ThrowOnError extends boolean = false>(
  options: Options<GetUserData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<
    GetUserResponses,
    GetUserErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/user/{userId}',
    ...options,
  })
}

/**
 * Get workspace
 * Get the workspace
 */
export const getWorkspace = <ThrowOnError extends boolean = false>(
  options?: Options<GetWorkspaceData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).get<
    GetWorkspaceResponses,
    GetWorkspaceErrors,
    ThrowOnError
  >({
    security: [
      {
        scheme: 'bearer',
        type: 'http',
      },
    ],
    url: '/api/v1/workspace/current',
    ...options,
  })
}
