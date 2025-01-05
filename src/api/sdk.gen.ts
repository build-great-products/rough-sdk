// This file is auto-generated by @hey-api/openapi-ts

import {
  type OptionsLegacyParser,
  createClient,
  createConfig,
} from '@hey-api/client-fetch'
import type {
  CreateNoteData,
  CreateNoteError,
  CreateNoteResponse,
  CreatePersonData,
  CreatePersonError,
  CreatePersonResponse,
  CreateReferenceData,
  CreateReferenceError,
  CreateReferenceResponse,
  CreateUserData,
  CreateUserError,
  CreateUserResponse,
  DeleteNoteData,
  DeleteNoteError,
  DeleteNoteResponse,
  GetBlockListData,
  GetBlockListError,
  GetBlockListResponse,
  GetCommentListError,
  GetCommentListResponse,
  GetContentData,
  GetContentError,
  GetContentListError,
  GetContentListResponse,
  GetContentResponse,
  GetDocumentData,
  GetDocumentError,
  GetDocumentListData,
  GetDocumentListError,
  GetDocumentListResponse,
  GetDocumentResponse,
  GetLabelListError,
  GetLabelListResponse,
  GetNoteData,
  GetNoteError,
  GetNoteLabelListError,
  GetNoteLabelListResponse,
  GetNoteListError,
  GetNoteListResponse,
  GetNoteResponse,
  GetPersonByEmailData,
  GetPersonByEmailError,
  GetPersonByEmailResponse,
  GetPersonData,
  GetPersonError,
  GetPersonListData,
  GetPersonListError,
  GetPersonListResponse,
  GetPersonResponse,
  GetReferenceListError,
  GetReferenceListResponse,
  GetSequenceDocumentListError,
  GetSequenceDocumentListResponse,
  GetSequenceListError,
  GetSequenceListResponse,
  GetUserData,
  GetUserError,
  GetUserListError,
  GetUserListResponse,
  GetUserResponse,
  GetWorkspaceError,
  GetWorkspaceResponse,
  UpsertPersonData,
  UpsertPersonError,
  UpsertPersonResponse,
} from './types.gen'

export const client = createClient(createConfig())

/**
 * Get block list
 * Get a list of blocks
 */
export const getBlockList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<GetBlockListData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetBlockListResponse,
    GetBlockListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/block',
  })
}

/**
 * Get comment list
 * Get a list of comments
 */
export const getCommentList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetCommentListResponse,
    GetCommentListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/comment',
  })
}

/**
 * Get content list
 * Get a list of content
 */
export const getContentList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetContentListResponse,
    GetContentListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/content',
  })
}

/**
 * Get content
 * Get content by its unique identifier
 */
export const getContent = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<GetContentData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetContentResponse,
    GetContentError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/content/{contentId}',
  })
}

/**
 * List all documents
 * Retrieves a list of all documents accessible to the authenticated user. Optionally includes archived documents.
 */
export const getDocumentList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<GetDocumentListData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetDocumentListResponse,
    GetDocumentListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/document',
  })
}

/**
 * Get a document
 * Get a document by its unique identifier
 */
export const getDocument = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<GetDocumentData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetDocumentResponse,
    GetDocumentError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/document/{documentId}',
  })
}

/**
 * Get label list
 * Get a list of labels
 */
export const getLabelList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetLabelListResponse,
    GetLabelListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/label',
  })
}

/**
 * Get note label list
 * Get a list of note labels
 */
export const getNoteLabelList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetNoteLabelListResponse,
    GetNoteLabelListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/note-label',
  })
}

/**
 * Get note list
 * Get a list of notes
 */
export const getNoteList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetNoteListResponse,
    GetNoteListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/note',
  })
}

/**
 * Create a note
 * Create a note
 */
export const createNote = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<CreateNoteData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateNoteResponse,
    CreateNoteError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/note',
  })
}

/**
 * Delete a note
 * Delete a note by its unique identifier
 */
export const deleteNote = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<DeleteNoteData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    DeleteNoteResponse,
    DeleteNoteError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/note/{noteId}',
  })
}

/**
 * Get a note
 * Get a note by its unique identifier
 */
export const getNote = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<GetNoteData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetNoteResponse,
    GetNoteError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/note/{noteId}',
  })
}

/**
 * Get person list
 * Get a list of people
 */
export const getPersonList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<GetPersonListData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetPersonListResponse,
    GetPersonListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/person',
  })
}

/**
 * Create person
 * Create a person in the workspace
 */
export const createPerson = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<CreatePersonData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreatePersonResponse,
    CreatePersonError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/person',
  })
}

/**
 * Get person
 * Get a person by their ID
 */
export const getPerson = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<GetPersonData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetPersonResponse,
    GetPersonError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/person/{personId}',
  })
}

/**
 * Get person by email
 * Get a person by their email address
 */
export const getPersonByEmail = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<GetPersonByEmailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetPersonByEmailResponse,
    GetPersonByEmailError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/person/email/{email}',
  })
}

/**
 * Upsert person
 * Upsert a person into the workspace. If an existing person already has a given email address, they will be updated. If not, a new person will be created.
 */
export const upsertPerson = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<UpsertPersonData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    UpsertPersonResponse,
    UpsertPersonError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/person/email/{email}',
  })
}

/**
 * Get reference list
 * Get a list of references
 */
export const getReferenceList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetReferenceListResponse,
    GetReferenceListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/reference',
  })
}

/**
 * Create reference
 * Create a reference in the workspace
 */
export const createReference = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<CreateReferenceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateReferenceResponse,
    CreateReferenceError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/reference',
  })
}

/**
 * Get sequence document list
 * Get a list of sequence documents
 */
export const getSequenceDocumentList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetSequenceDocumentListResponse,
    GetSequenceDocumentListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/sequence-document',
  })
}

/**
 * Get sequence list
 * Get a list of sequences
 */
export const getSequenceList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetSequenceListResponse,
    GetSequenceListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/sequence',
  })
}

/**
 * Get user list
 * Get a list of users
 */
export const getUserList = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetUserListResponse,
    GetUserListError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/user',
  })
}

/**
 * Create user
 * Create a user in the workspace
 */
export const createUser = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<CreateUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateUserResponse,
    CreateUserError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/user',
  })
}

/**
 * Get user
 * Get a user
 */
export const getUser = <ThrowOnError extends boolean = false>(
  options: OptionsLegacyParser<GetUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetUserResponse,
    GetUserError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/user/{userId}',
  })
}

/**
 * Get workspace
 * Get the workspace
 */
export const getWorkspace = <ThrowOnError extends boolean = false>(
  options?: OptionsLegacyParser<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetWorkspaceResponse,
    GetWorkspaceError,
    ThrowOnError
  >({
    ...options,
    url: '/api/v1/workspace/current',
  })
}
