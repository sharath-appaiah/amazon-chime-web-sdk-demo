const client = new ChimeWebSDK();
const contactApi = client.contact;

// Invokes when the button is clicked
function onButtonClick() {
  const emails = $("#emails-input").val().split(',');
  for (const email of emails) {
    contactApi.addContact(email)
      .then(result => {
        sendToOutput(`${email} added!`);
      })
  }
}

// Sends output to the textarea
function sendToOutput(output){
  console.log("sendToOutput");
  $("#text-output").append('<span class="list-group-item">' + output + '</span>');
}