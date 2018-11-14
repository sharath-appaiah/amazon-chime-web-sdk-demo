const client = new ChimeWebSDK();
const meetingsApi = client.meetings;

// Append message to chat message wall
function appendPin(content) {
  if (!content) return;
  $("#pin").append('<li class="list-group-item">' + content + '</li>');
}

function handleGetOnetimePin() {
  meetingsApi.getOnetimePin()
    .then(function(pin) {
      appendPin(pin);
    }).catch(function (error) {
    console.log(error);
  });
}