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

#### Get User
```typescript
import { getUser } from '@roughapp/sdk'

const user = await getUser({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  userId: 'USER_ID'
})
```

#### Get Workspace
```typescript
import { getWorkspace } from '@roughapp/sdk'

const workspace = await getWorkspace({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  workspaceId: 'WORKSPACE_ID'
})
```

#### Create Note
```typescript
import { createNote } from '@roughapp/sdk'

const note = await createNote({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  content: 'Note content',
  createdByUserId: 'USER_ID',
  referenceId: 'REFERENCE_ID', // optional
  customerId: 'CUSTOMER_ID' // optional
})
```

#### Create Reference
```typescript
import { createReference } from '@roughapp/sdk'

const reference = await createReference({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  name: 'Reference name',
  url: 'https://example.com'
})
```

#### Create Customer
```typescript
import { createCustomer } from '@roughapp/sdk'

const customer = await createCustomer({
  baseUrl: 'https://in.rough.app',
  apiToken: 'YOUR_API_TOKEN',
  name: 'Customer name'
})
```

## Types

The SDK exports the following TypeScript types:

- `Note`
- `User`
- `Workspace`
- `Reference`
- `Customer`

## Requirements

- Node.js v22.9.0 or higher

## License

MIT
