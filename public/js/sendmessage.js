const client = new ChimeWebSDK();
const chatApi = client.chat;

const conversationId = '<REPLACE_WITH_CONVERSATION_ID>';

// Append message to chat message wall
function appendMessage(content) {
  if (!content) return;
  $("#chat-messages").append('<li class="list-group-item">' + content + '</li>');
}

function handleSendMessage() {
  const message = $("#message-input").val();
  if (message.trim()) {
    chatApi.createConversationMessage(conversationId, message.trim())
      .then(function(message) {
        $("#message-input").val('');
        appendMessage(message.content);
      }).catch(function (error) {
        console.log(error);
      })
  }
}