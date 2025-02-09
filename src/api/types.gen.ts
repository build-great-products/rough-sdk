// This file is auto-generated by @hey-api/openapi-ts

export type Block = {
  id: string
  index: number
  parentBlockId?: string
  documentId: string
  ownedByTeamId?: string
  ownedByPersonId?: string
  snoozedUntil?: number
  lockedAt?: number
  lastModifiedAt: number
  type: 'TEXT' | 'DRAWING'
  data?: {
    title: string
    canvasId?: string
    contentId?: string
  }
}

export type Comment = {
  id: string
  postedAt: number
  userId: string
  contentId: string
  parentCommentId?: string
  documentId?: string
  sequenceId?: string
  noteId?: string
  onBlockId?: string
  onEventId?: string
  resolvedAt?: number
  resolvedByUserId?: string
}

export type Content = {
  id: string
  state: string
  flagList: Array<string>
}

export type Document = {
  /**
   * The unique identifier of the document
   */
  id: string
  /**
   * The title of the document
   */
  title: string
  /**
   * The status of the document
   */
  status:
    | 'CANCELED'
    | 'IDEA'
    | 'DEVELOPMENT'
    | 'RELEASED'
    | 'DRAFT'
    | 'INITIAL'
    | 'ARCHIVED'
  /**
   * The public identifier of the document
   */
  publicId: number
  /**
   * The unique identifier of the user who created the document
   */
  createdByUserId: string
  /**
   * The unique identifier of the team that owns the document
   */
  ownedByTeamId?: string
  /**
   * The unique identifier of the person that owns the document
   */
  ownedByPersonId?: string
  /**
   * The list of VCS tags associated with the document
   */
  vcsTagList: Array<string>
  /**
   * The timestamp when the document was archived
   */
  archivedAt?: number
  /**
   * The unique identifier of the user who archived the document
   */
  archivedByUserId?: string
  /**
   * The timestamp when the document was last modified
   */
  lastModifiedAt: number
  /**
   * The timestamp when the document was released
   */
  releasedAt?: number
}

export type Label = {
  id: string
  name: string
  color: string
}

export type NoteLabel = {
  noteId: string
  labelId: string
}

export type Note = {
  id: string
  publicId: number
  status: 'DRAFT' | 'ACTIVE' | 'INITIAL'
  contentId: string
  referenceId?: string
  personId?: string
  lastModifiedByUserId: string
  lastModifiedAt: number
}

export type Person = {
  id: string
  name: string
  email?: string
  imageSet?: {
    16: string
    32: string
    64: string
    128: string
    256: string
  }
  description: string
}

export type Reference = {
  id: string
  name: string
  url: string
}

export type SequenceDocument = {
  sequenceId: string
  documentId: string
  order: number
}

export type Sequence = {
  id: string
  name: string
  publicId: string
  type: 'USER' | 'STATUS' | 'WISH'
  ownedByPersonId?: string
  status?:
    | 'CANCELED'
    | 'IDEA'
    | 'DEVELOPMENT'
    | 'RELEASED'
    | 'DRAFT'
    | 'INITIAL'
    | 'ARCHIVED'
  icon?: string
  pinned?: number
  groupBy: 'NONE' | 'STATUS'
}

export type User = {
  id: string
  email: string
  name?: string
  imageSet?: {
    16: string
    32: string
    64: string
    128: string
    256: string
  }
  isDemoAccount: boolean
}

export type Workspace = {
  id: string
  publicId: string
  name: string
  icp?: string
  strategy?: string
  vision?: string
  icon?: string
}

export type GetBlockListData = {
  body?: never
  path?: never
  query?: {
    documentId?: string
  }
  url: '/api/v1/block'
}

export type GetBlockListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetBlockListError = GetBlockListErrors[keyof GetBlockListErrors]

export type GetBlockListResponses = {
  200: Array<Block>
}

export type GetBlockListResponse =
  GetBlockListResponses[keyof GetBlockListResponses]

export type GetCommentListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/comment'
}

export type GetCommentListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetCommentListError =
  GetCommentListErrors[keyof GetCommentListErrors]

export type GetCommentListResponses = {
  200: Array<Comment>
}

export type GetCommentListResponse =
  GetCommentListResponses[keyof GetCommentListResponses]

export type GetContentListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/content'
}

export type GetContentListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetContentListError =
  GetContentListErrors[keyof GetContentListErrors]

export type GetContentListResponses = {
  200: Array<Content>
}

export type GetContentListResponse =
  GetContentListResponses[keyof GetContentListResponses]

export type GetContentData = {
  body?: never
  path: {
    contentId: string
  }
  query?: never
  url: '/api/v1/content/{contentId}'
}

export type GetContentErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetContentError = GetContentErrors[keyof GetContentErrors]

export type GetContentResponses = {
  200: Content
}

export type GetContentResponse = GetContentResponses[keyof GetContentResponses]

export type GetDocumentListData = {
  body?: never
  path?: never
  query?: {
    /**
     * Whether to include archived documents in the list. Defaults to false.
     */
    includeArchived?: 'true' | 'false'
  }
  url: '/api/v1/document'
}

export type GetDocumentListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetDocumentListError =
  GetDocumentListErrors[keyof GetDocumentListErrors]

export type GetDocumentListResponses = {
  200: Array<Document>
}

export type GetDocumentListResponse =
  GetDocumentListResponses[keyof GetDocumentListResponses]

export type GetDocumentData = {
  body?: never
  path: {
    documentId: string
  }
  query?: never
  url: '/api/v1/document/{documentId}'
}

export type GetDocumentErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetDocumentError = GetDocumentErrors[keyof GetDocumentErrors]

export type GetDocumentResponses = {
  200: Document
}

export type GetDocumentResponse =
  GetDocumentResponses[keyof GetDocumentResponses]

export type CreatePendingFileUploadData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/file-upload'
}

export type CreatePendingFileUploadErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type CreatePendingFileUploadError =
  CreatePendingFileUploadErrors[keyof CreatePendingFileUploadErrors]

export type CreatePendingFileUploadResponses = {
  200: {
    token: string
  }
}

export type CreatePendingFileUploadResponse =
  CreatePendingFileUploadResponses[keyof CreatePendingFileUploadResponses]

export type GetLabelListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/label'
}

export type GetLabelListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetLabelListError = GetLabelListErrors[keyof GetLabelListErrors]

export type GetLabelListResponses = {
  200: Array<Label>
}

export type GetLabelListResponse =
  GetLabelListResponses[keyof GetLabelListResponses]

export type GetNoteLabelListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/note-label'
}

export type GetNoteLabelListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetNoteLabelListError =
  GetNoteLabelListErrors[keyof GetNoteLabelListErrors]

export type GetNoteLabelListResponses = {
  200: Array<NoteLabel>
}

export type GetNoteLabelListResponse =
  GetNoteLabelListResponses[keyof GetNoteLabelListResponses]

export type GetNoteListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/note'
}

export type GetNoteListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetNoteListError = GetNoteListErrors[keyof GetNoteListErrors]

export type GetNoteListResponses = {
  200: Array<Note>
}

export type GetNoteListResponse =
  GetNoteListResponses[keyof GetNoteListResponses]

export type CreateNoteData = {
  body?: {
    createdByUserId: string
    content: string
    contentFormat?: 'plaintext' | 'markdown'
    referenceId?: string
    personId?: string
    lastModifiedAt?: string
  }
  path?: never
  query?: never
  url: '/api/v1/note'
}

export type CreateNoteErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type CreateNoteError = CreateNoteErrors[keyof CreateNoteErrors]

export type CreateNoteResponses = {
  200: Note
}

export type CreateNoteResponse = CreateNoteResponses[keyof CreateNoteResponses]

export type DeleteNoteData = {
  body?: never
  path: {
    noteId: string
  }
  query?: never
  url: '/api/v1/note/{noteId}'
}

export type DeleteNoteErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
  /**
   * Not found
   */
  404: {
    message: string
  }
}

export type DeleteNoteError = DeleteNoteErrors[keyof DeleteNoteErrors]

export type DeleteNoteResponses = {
  200: {
    [key: string]: unknown
  }
}

export type DeleteNoteResponse = DeleteNoteResponses[keyof DeleteNoteResponses]

export type GetNoteData = {
  body?: never
  path: {
    noteId: string
  }
  query?: never
  url: '/api/v1/note/{noteId}'
}

export type GetNoteErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetNoteError = GetNoteErrors[keyof GetNoteErrors]

export type GetNoteResponses = {
  200: Note
}

export type GetNoteResponse = GetNoteResponses[keyof GetNoteResponses]

export type GetPersonListData = {
  body?: never
  path?: never
  query?: {
    name?: string
    description?: string
    email?: string
  }
  url: '/api/v1/person'
}

export type GetPersonListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Unauthorized
   */
  403: {
    message: string
  }
}

export type GetPersonListError = GetPersonListErrors[keyof GetPersonListErrors]

export type GetPersonListResponses = {
  200: Array<Person>
}

export type GetPersonListResponse =
  GetPersonListResponses[keyof GetPersonListResponses]

export type CreatePersonData = {
  body?: {
    name: string
    email?: string
    image?: string
    description?: string
  }
  path?: never
  query?: never
  url: '/api/v1/person'
}

export type CreatePersonErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Unauthorized
   */
  403: {
    message: string
  }
  /**
   * Person with email already exists
   */
  409: {
    message: string
  }
}

export type CreatePersonError = CreatePersonErrors[keyof CreatePersonErrors]

export type CreatePersonResponses = {
  200: Person
}

export type CreatePersonResponse =
  CreatePersonResponses[keyof CreatePersonResponses]

export type GetPersonData = {
  body?: never
  path: {
    personId: string
  }
  query?: never
  url: '/api/v1/person/{personId}'
}

export type GetPersonErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Unauthorized
   */
  403: {
    message: string
  }
  /**
   * Person not found
   */
  404: {
    message: string
  }
}

export type GetPersonError = GetPersonErrors[keyof GetPersonErrors]

export type GetPersonResponses = {
  200: Person
}

export type GetPersonResponse = GetPersonResponses[keyof GetPersonResponses]

export type UpdatePersonData = {
  body?: {
    name?: string
    email?: string | null
    image?: string | null
    description?: string
  }
  path: {
    personId: string
  }
  query?: never
  url: '/api/v1/person/{personId}'
}

export type UpdatePersonErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Unauthorized
   */
  403: {
    message: string
  }
  /**
   * Person not found
   */
  404: {
    message: string
  }
}

export type UpdatePersonError = UpdatePersonErrors[keyof UpdatePersonErrors]

export type UpdatePersonResponses = {
  200: Person
}

export type UpdatePersonResponse =
  UpdatePersonResponses[keyof UpdatePersonResponses]

export type GetPersonByEmailData = {
  body?: never
  path: {
    email: string
  }
  query?: never
  url: '/api/v1/person/email/{email}'
}

export type GetPersonByEmailErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
  /**
   * Not Found
   */
  404: {
    message: string
  }
}

export type GetPersonByEmailError =
  GetPersonByEmailErrors[keyof GetPersonByEmailErrors]

export type GetPersonByEmailResponses = {
  200: Person
}

export type GetPersonByEmailResponse =
  GetPersonByEmailResponses[keyof GetPersonByEmailResponses]

export type GetReferenceListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/reference'
}

export type GetReferenceListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetReferenceListError =
  GetReferenceListErrors[keyof GetReferenceListErrors]

export type GetReferenceListResponses = {
  200: Array<Reference>
}

export type GetReferenceListResponse =
  GetReferenceListResponses[keyof GetReferenceListResponses]

export type CreateReferenceData = {
  body?: {
    name: string
    url: string
  }
  path?: never
  query?: never
  url: '/api/v1/reference'
}

export type CreateReferenceErrors = {
  /**
   * Bad Request
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type CreateReferenceError =
  CreateReferenceErrors[keyof CreateReferenceErrors]

export type CreateReferenceResponses = {
  200: Reference
}

export type CreateReferenceResponse =
  CreateReferenceResponses[keyof CreateReferenceResponses]

export type GetSequenceDocumentListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/sequence-document'
}

export type GetSequenceDocumentListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetSequenceDocumentListError =
  GetSequenceDocumentListErrors[keyof GetSequenceDocumentListErrors]

export type GetSequenceDocumentListResponses = {
  200: Array<SequenceDocument>
}

export type GetSequenceDocumentListResponse =
  GetSequenceDocumentListResponses[keyof GetSequenceDocumentListResponses]

export type GetSequenceListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/sequence'
}

export type GetSequenceListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetSequenceListError =
  GetSequenceListErrors[keyof GetSequenceListErrors]

export type GetSequenceListResponses = {
  200: Array<Sequence>
}

export type GetSequenceListResponse =
  GetSequenceListResponses[keyof GetSequenceListResponses]

export type GetUserListData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/user'
}

export type GetUserListErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type GetUserListError = GetUserListErrors[keyof GetUserListErrors]

export type GetUserListResponses = {
  200: Array<User>
}

export type GetUserListResponse =
  GetUserListResponses[keyof GetUserListResponses]

export type CreateUserData = {
  body?: {
    name: string
    email: string
    image?: string
  }
  path?: never
  query?: never
  url: '/api/v1/user'
}

export type CreateUserErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
}

export type CreateUserError = CreateUserErrors[keyof CreateUserErrors]

export type CreateUserResponses = {
  200: User
}

export type CreateUserResponse = CreateUserResponses[keyof CreateUserResponses]

export type GetUserData = {
  body?: never
  path: {
    userId: 'current' | string
  }
  query?: never
  url: '/api/v1/user/{userId}'
}

export type GetUserErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Forbidden
   */
  403: {
    message: string
  }
  /**
   * User not found
   */
  404: {
    message: string
  }
}

export type GetUserError = GetUserErrors[keyof GetUserErrors]

export type GetUserResponses = {
  200: User
}

export type GetUserResponse = GetUserResponses[keyof GetUserResponses]

export type GetWorkspaceData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/workspace/current'
}

export type GetWorkspaceErrors = {
  /**
   * Invalid input (path parameters, query string, or body)
   */
  400: {
    message: string
  }
  /**
   * Unauthenticated
   */
  401: {
    message: string
  }
  /**
   * Unauthorized
   */
  403: {
    message: string
  }
}

export type GetWorkspaceError = GetWorkspaceErrors[keyof GetWorkspaceErrors]

export type GetWorkspaceResponses = {
  200: Workspace
}

export type GetWorkspaceResponse =
  GetWorkspaceResponses[keyof GetWorkspaceResponses]

export type ClientOptions = {
  baseUrl: 'https://in.rough.app' | (string & {})
}
