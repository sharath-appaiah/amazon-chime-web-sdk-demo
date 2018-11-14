const client = new ChimeWebSDK();
const chatApi = client.chat;
const authApi = client.auth;

const conversationId = '<REPLACE_WITH_CONVERSATION_ID>';

// Append message to chat message wall
function appendMessage(content) {
  if (!content) return;
  $("#chat-messages").append('<li class="list-group-item">' + content + '</li>');
}

authApi.checkIsAuthenticated()
  .then(function(isAuthenticated) {
    if (isAuthenticated) {
      chatApi.onConversationMessage(conversationId, function(event) {
        const content = event.data.record.content;
        if (content) {
          appendMessage(content);
        }
      });
    } else {
      console.log('Not authenticated!');
    }
  });