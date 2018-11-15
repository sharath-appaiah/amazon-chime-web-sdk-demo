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

### API Documentation

#### ChimeWebSDK().chat.listConversations()
###### arg:
* none
###### return:
 
    {
      "result": [
        {
          "id": String,
          "channel": String,
          "visibility": String,
          "createdOn": Date,
          "updatedOn": Date,
          "lastSent": Date,
          "members": [
            {
              "id": "3f52b52f-c359-46db-b7ef-cb8815f3316c",
              "name": "Amazon Chime Recordings",
              "email": "recordings@chime.aws",
              "type": "recorder",
              "presenceChannel": "profile_presence!3f52b52f-c359-46db-b7ef-cb8815f3316c",
              "lastRead": "2017-05-12T16:54:05.775Z",
              "lastDelivered": "2017-05-12T16:54:05.775Z"
            }, {
              "id": "fe55e6cd-ae6e-4ccf-9de7-22a32f175d12",
              "name": "Cox, Eric",
              "email": "ericcox@amazon.com",
              "type": "idp",
              "presenceChannel": "profile_presence!fe55e6cd-ae6e-4ccf-9de7-22a32f175d12",
              "lastRead": "2018-09-26T18:17:30.573Z",
              "lastDelivered": "2018-11-15T00:13:42.620Z"
            }
          ],
          "isFavorite": bool
        }
      ]
    }


### ChimeWebSDK().chat.createConversationMessage(conversationId, messageContent)
###### args:
* conversaionId - String
* messageContent - String
###### return: 
    {
      "id": String,
      "sender": String,
      "content": message,
      "createdOn": Date,
      "updatedOn": Date,
      "isSystemMessage": bool,
      "conversationId": String
    }

### ChimeWebClient().chat.onConversationMessage(conversationId, callback(message));
###### args:
* conversationId - String
* callback(message) - function
    * Message:
        {
          "data": {
            "record": {
              "id": String,
              "sender": String,
              "content": String,
              "createdOn": Date,
              "updatedOn": Date,
              "isSystemMessage": bool,
              "conversationId": String
            },
            "metadata": {
              "isNoisy": true
            }
          }
        }
###### return:
* none