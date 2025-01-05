# @roughapp/sdk

A TypeScript SDK for interacting with the Rough API.

## Installation

```bash
npm install @roughapp/sdk
```

## Authorization

All API requests require an Authorization header with a Bearer token. When making requests, include your API key like this:

```typescript
import { getDocumentList } from '@roughapp/sdk'

const response = await getDocumentList({
  headers: {
    Authorization: "Bearer YOUR_API_KEY"
  }
})
```

## Available Endpoints

### Documents
```typescript
// Get all documents
const documents = await getDocumentList({
  headers: { Authorization: "Bearer $API_KEY" },
  query: { includeArchived: 'false' }
})

// Get a specific document
const document = await getDocument({
  headers: { Authorization: "Bearer $API_KEY" },
  path: { documentId: "123" }
})
```

### Notes
- `getNoteList()` - Get all notes
- `createNote()` - Create a new note
- `getNote()` - Get a specific note
- `deleteNote()` - Delete a note

### People
- `getPersonList()` - List all people
- `createPerson()` - Create a new person
- `getPerson()` - Get a specific person
- `getPersonByEmail()` - Find person by email
- `upsertPerson()` - Create or update a person

### Other Resources
- `getWorkspace()` - Get workspace details
- `getContentList()` - List all content
- `getLabelList()` - List all labels
- `getReferenceList()` - List all references
- `getUserList()` - List all users

## OAuth2 Authentication

For OAuth2 authentication flows:

```typescript
import { createRoughOAuth2Provider } from '@roughapp/sdk'

const oauth2 = createRoughOAuth2Provider({
  baseUrl: 'https://in.rough.app',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'YOUR_REDIRECT_URI'
})
```

For detailed API documentation and request/response types, please refer to the source code or contact Rough support.
