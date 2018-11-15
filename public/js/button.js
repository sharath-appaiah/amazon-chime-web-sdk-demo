const client = new ChimeWebSDK();
const chatApi = client.chat;

var counter = 0;

// Invokes when the button is clicked
function onButtonClick() {
  // Implement me!
  // console.log("onButtonClick");
  // sendToOutput("Clicked " + counter + (counter == 1 ? " time!" : " times!"));
  chatApi.listConversations().then((result)=>{sendToOutput(JSON.stringify(result))});
}

// Sends output to the textarea
function sendToOutput(output){
  console.log("sendToOutput");
  $("#text-output").val(output);
}