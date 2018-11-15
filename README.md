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
              "id": String,
              "name": String,
              "email": String,
              "type": String,
              "presenceChannel": String,
              "lastRead": Date,
              "lastDelivered": Date
            }, {
              "id": String,
              "name": String,
              "email": String,
              "type": String,
              "presenceChannel": String,
              "lastRead": Date,
              "lastDelivered": Date
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
    ```
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
    ```
###### return:
* none