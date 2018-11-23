## Amazon Chime Web SDK Demo

### Getting Started

1. Install Node.js: https://nodejs.org/en

1. Install npm packges:

   ```bash
   npm install
   ```

1. Start server:

   ```bash
   npm run server
   ```

### Basic Usage

```javascript
// Initialize Amazon Chime Web SDK client
const client = new ChimeWebSDK();

// APIs are split into four namespaces 
const { auth, chat, contact, meetings } = client;

// Check authentication status (ALWAYS required on page load)
auth.checkIsAuthenticated().then(isAuthed => {
  if (isAuthed) {
    // ready to use auth-required methods
    contact.addContact('foo@example.com')
      .then(profile => {
        console.log(profile);
      })
  } else {
    // if users is not authenticated, we should hide everything that requires auth 
    // and bind authenticate method to a user action(button) asking for authentication
    // For example: $('#auth-button').click(auth.authenticate)
  }
});

// This event will be fired only if auth status changes after SDK is loaded
auth.onAuthStatus(isAuthed => {
  if (isAuthed) {
    // render regular pages
  } else {
    // render a sign-in page
  }
});
```

### API Documentation

### Auth

#### `auth.checkIsAuthenticated()`

| Type    | Auth required? | Description                                 |
| :------ | :------------- | :------------------------------------------ |
| Promise | false          | Returns if current client is authenticated. |

**Arguments**

- `None`

**Response**

- isAuthed: `Boolean`

---

#### `auth.onAuthStatus(callback)`

| Type  | Auth required? | Description                                |
| :---- | :------------- | :----------------------------------------- |
| Event | false          | Subscribes to event of auth status change. |

**Arguments**

- callback: `(isAuthed: boolean) => void`

**Response**

- `void`

---

#### `auth.authenticate()`

| Type     | Auth required? | Description                                                   |
| :------- | :------------- | :------------------------------------------------------------ |
| Function | false          | Pops up a window to authenticate user and ask for permission. |

**Arguments**

- `None`

**Response**

- `void`

---

#### `auth.getCurrentUserProfile()`

| Type    | Auth required? | Description                                       |
| :------ | :------------- | :------------------------------------------------ |
| Promise | true           | Returns the current authenticated user's Profile. |

**Arguments**

- `None`

**Response**

- profile: `Profile`

---

#### `auth.signOut()`

| Type    | Auth required? | Description                                                     |
| :------ | :------------- | :-------------------------------------------------------------- |
| Promise | true           | Sign-out current authenticated user and deauthorize permission. |

**Arguments**

- `None`

**Response**

- `void`

---

### Chat

#### `chat.createConversation(profileIds)`

| Type    | Auth required? | Description                       |
| :------ | :------------- | :-------------------------------- |
| Promise | true           | Create and return a conversation. |

**Arguments**

- profileIds: `string[]`

**Response**

- conversation: `Conversation`

---

#### `chat.createConversationMessage(conversationId, content)`

| Type    | Auth required? | Description                               |
| :------ | :------------- | :---------------------------------------- |
| Promise | true           | Create and return a conversation message. |

**Arguments**

- conversationId: `string`
- content: `string`

**Response**

- conversationMessage: `ConversationMessage`

---

#### `chat.listConversations(options)`

| Type    | Auth required? | Description                       |
| :------ | :------------- | :-------------------------------- |
| Promise | true           | Return a list of conversation.    |

**Arguments**

- options:
  ```javascript
  {
    "nextToken": "next-token",    /* Optional string value */
    "maxResults": 50,             /* Optional number value*/
    "recent": "true",             /* Optional boolean value */
    "favorite": "false",          /* Optional boolean value */
    "all": "false"                /* Optional boolean value */
  }
  ```

**Response**

- result: `PaginatedResult<Conversation>`
  ```javascript
  {
    nextToken: "next-token",
    result: /* See Conversation Object*/
  }
  ```

#### `chat.listConversationMessages(conversationId, options)`

| Type    | Auth required? | Description                             |
| :------ | :------------- | :-------------------------------------- |
| Promise | true           | Return a list of conversation messages. |

**Arguments**

- conversationId: `string`
- options:
  ```javascript
  {
    "nextToken": "next-token",            /* Optional string value */
    "maxResults": 50,                     /* Optional number value */
    "order": "descending",                /* Optional: 'descending'(default) or 'ascending' */
    "after": "2018-11-15T20:46:07.940Z",  /* Optional date value */
    "before": "2018-11-15T20:46:07.940Z"  /* Optional date value */
  }
  ```

**Response**

- result: `PaginatedResult<ConversationMessage>`
  ```javascript
  {
    nextToken: "next-token",
    result: /* See ConversationMessage Object */
  }
  ```

---

#### `chat.onConversationMessage(conversationId, callback)`

| Type  | Auth required? | Description                              |
| :---- | :------------- | :--------------------------------------- |
| Event | true           | Subscribes to event of receiving message |

**Arguments**

- conversationId: `string`
- callback: `(event: Event<ConversationMessage>) => any`

**Response**

- `void`

---

### Contact

#### `contact.addContact(email)`

| Type    | Auth required? | Description              |
| :------ | :------------- | :----------------------- |
| Promise | true           | Add and return a contact |

**Arguments**

- email: `string`

**Response**

- contact: `Profile`

---

### Meetings (Pro license user only)

#### `meetings.getOnetimePin()`

| Type    | Auth required? | Description                   |
| :------ | :------------- | :---------------------------- |
| Promise | true           | Return a one-time meeting PIN |

**Arguments**

- `None`

**Response**

- pin: `string`

---

#### `meetings.startInstantMeeting(usePersonalPin)`

| Type     | Auth required? | Description                                                |
| :------- | :------------- | :--------------------------------------------------------- |
| Function | true           | Start an instant meeting with personal PIN or one-time PIN |

**Arguments**

- usePersonalPin: `boolean`

**Response**

- `void`

---

#### `meetings.startGroupMeeting(profileIds)`

| Type     | Auth required? | Description                                    |
| :------- | :------------- | :--------------------------------------------- |
| Function | true           | Start a meeting with one or multiple attendees |

**Arguments**

- profileIds: `string[]`

**Response**

- `void`

---

### Object types

#### `Profile`

```javascript
{
  "name": "Foo"
  "personalPhoneNumber": null
  "presence": 2
  "presenceChannel": "profile_presence!1234567890"
  "primaryEmail": "foo@example.com"
  "profileChannel": "profile!1234567890"
  "profileId": "1234567890"
  "provisionedPhoneNumber": "+1234567890"
}
```

#### `Conversation`

```javascript
{
  "channel": "conversation!1234567890",
  "createdOn": "2018-08-07T17:08:06.445Z",
  "discussionType": "conversation",
  "hasPhoneMember": false,
  "id": "1234567890",
  "isFavorite": true,
  "isGroup": false,
  "lastMessage": null,
  "lastSent": "2018-11-15T20:46:07.940Z",
  "members": [
    {
      "email": "foo@amazon.com",
      "id": "1234567890",
      "lastDelivered": "2018-11-15T20:46:07.940Z",
      "lastRead": "2018-11-15T20:46:07.940Z",
      "name": "Foo",
      "presenceChannel": "profile_presence!1234567890",
      "presenceStatus": undefined,
      "type": "idp",
    },
    {
      "email": "far@amazon.com",
      "id": "0987654321",
      "lastDelivered": "2018-11-15T20:46:07.940Z",
      "lastRead": "2018-11-15T20:46:07.940Z",
      "name": "Far",
      "presenceChannel": "profile_presence!0987654321",
      "presenceStatus": undefined,
      "type": "idp",
    }],
  "name": undefined,
  "preferences": {
    "notificationPreferences": {
        "desktopNotificationPreferences": "always",
        "mobileNotificationPreferences": "always"
      }
  },
  "updatedOn": "2018-11-15T21:32:48.182Z",
  "visibility": "visible"
}
```

#### `ConversationMessage`

```javascript
{
  "attachment": {
    "contentLength": 20537,
    "contentType": "image/png",
    "fileName": "kitten.png",
    "imageHeight": 107,
    "imageWidth": 120,
    "url": "https://example.com/kitten.png"
  },
  "attachmentVariants": [
    {
      "contentLength": 29997,
      "contentType": "image/png",
      "imageHeight": 161,
      "imageWidth": 180,
      "url": "https://example.com/thumb/kitten.png",
      "variantType": "thumb_180_180"
    }],
  "content": "Hi there",
  "conversationId": "1234567890",
  "createdOn": "2018-11-16T00:33:09.165Z",
  "id": "1234567890",
  "isSystemMessage": false,
  "metadata": undefined,
  "sender": "0987654321",
  "status": undefined,
  "updatedOn": "2018-11-16T00:33:09.165Z"
}
```

#### `Event<ConversationMessage>`

```javascript
{
  "data": {
    "metadata": {
      "isNoisy": true
    },
    "record": /* see ConversationMessage object */
  }
}
```
