# @roughapp/sdk

A TypeScript SDK for interacting with the Rough API.

## Installation

```bash
npm install @roughapp/sdk
```

## Usage

### OAuth2 Authentication

```typescript
import { createRoughOAuth2Provider } from '@roughapp/sdk'

const oauth2 = createRoughOAuth2Provider({
  baseUrl: 'https://in.rough.app',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'YOUR_REDIRECT_URI'
})
```

### API Endpoints

#### Users

```typescript
// Get a single user
import { getUser } from '@roughapp/sdk'
const user = await getUser({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  userId: 'USER_ID'
})

// Get list of users
import { getUserList } from '@roughapp/sdk'
const users = await getUserList({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN'
})

// Create a new user
import { createUser } from '@roughapp/sdk'
const newUser = await createUser({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  name: 'User Name',
  email: 'user@example.com',
  image: 'IMAGE_URL' // optional
})
```

#### Workspace

```typescript
import { getWorkspace } from '@roughapp/sdk'

const workspace = await getWorkspace({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  workspaceId: 'WORKSPACE_ID'
})
```

#### Notes

```typescript
// Create a new note
import { createNote } from '@roughapp/sdk'
const note = await createNote({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  content: 'Note content',
  contentFormat: 'markdown', // optional: 'plaintext' | 'markdown'
  createdByUserId: 'USER_ID',
  referenceId: 'REFERENCE_ID', // optional
  customerId: 'CUSTOMER_ID', // optional
  lastModifiedAt: new Date() // optional
})

// Get list of notes
import { getNoteList } from '@roughapp/sdk'
const notes = await getNoteList({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN'
})
```

#### References

```typescript
// Create a new reference
import { createReference } from '@roughapp/sdk'
const reference = await createReference({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  name: 'Reference name',
  url: 'https://example.com'
})
```

#### Customers

```typescript
// Create a new customer
import { createCustomer } from '@roughapp/sdk'
const customer = await createCustomer({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  name: 'Customer name'
})

// Get list of customers
import { getCustomerList } from '@roughapp/sdk'
const customers = await getCustomerList({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN'
})
```

## Types

The SDK exports the following TypeScript types:

```typescript
type Note = {
  id: string
  status: string
  title: string
  contentId: string
  referenceId?: string
  customerId?: string
  lastModifiedByUserId: string
  lastModifiedAt: number
}

type User = {
  id: string
  email: string
  name: string
  image?: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  isDemoAccount: boolean
}

type Workspace = {
  id: string
  publicId: string
  name: string
  icp: string
  strategy: string
  vision: string
  icon: string
}

type Reference = {
  id: string
  name: string
  url: string
}

type Customer = {
  id: string
  name: string
}
```

## License

MIT
