const client = new ChimeWebSDK();
const chatApi = client.chat;

// Append message to chat message wall
function appendConversation(content) {
  if (!content) return;
  $("#conversations").append('<li class="list-group-item">' + content + '</li>');
}

function handleListConversations() {
  chatApi.listConversations({ recent: true })
    .then(function(json) {
      json.result.forEach(function(conversation) {
        appendConversation(conversation.id);
      });
    }).catch(function (error) {
      console.log(error);
    });
}