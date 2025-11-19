# @roughapp/sdk

A TypeScript SDK for interacting with the Rough API.

## Installation

```bash
npm install @roughapp/sdk
```

## Authorization

All API requests require an Authorization header with a Bearer token. When making requests, include your API key like this:

```typescript
import { client, getDocumentList } from '@roughapp/sdk'

// Option 1: use the same API key for all requests
client.setConfig({ auth: () => 'your-api-key' })

// Option 2: manually pass an API key
const response = await getDocumentList({
    auth: 'your-api-key'
})
```

## Available Endpoints

### Documents
```typescript
// Get all documents
const documents = await getDocumentList({
  query: { includeArchived: 'false' }
})

// Get a specific document
const document = await getDocument({
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

## Uploading Files

```typescript
import { createAsset } from '@roughapp/sdk'
import { readFile } from 'node:fs/promises'

const buffer = await readFile('./image.jpg')
const blob = new Blob(buffer)

const asset = await createAsset({
  auth: 'your-api-token',
  body: {
    file: blob,
  }
})

// You can now use `asset.url` to reference the uploaded file.
```

For detailed API documentation and request/response types, please refer to the source code or contact Rough support.
