const client = new ChimeWebSDK();
const meetingsApi = client.meetings;

function handleStartInstantMeeting(usePersonalPin) {
  meetingsApi.startInstantMeeting(usePersonalPin)
    .catch(function (error) {
      console.log(error);
    });
}