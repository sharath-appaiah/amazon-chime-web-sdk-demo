var client = new ChimeWebSDK();
var chatApi = client.chat;
var contactApi = client.contact;
var authApi = client.auth;

var conversationId;
var nameMap = {};
var currentProfile = {};

function start() {
    // Always check if the user is authenticated on page load to
    // to detemine what to render
    authApi.checkIsAuthenticated()
        .then(function(isAuthenticated) {
            if (isAuthenticated) {
                authApi.getCurrentUserProfile()
                    .then(function(profile) {
                        currentProfile = profile;
                        console.log("Authenticated as", profile);
                    })
            } else {
                console.log("Not authenticated!");
            }
        });

    // Render proper contents on auth change from other tabs
    authApi.onAuthStatus(function(isAuthenticated) {
        if (isAuthenticated) {
            authApi.getCurrentUserProfile().then((profile)=>{console.log("Just authenticated as", profile)});
        } else {
            console.log("Just logged out!");
        }
    })

    $("#auth-button").click(authApi.authenticate);
    $("#unauth-button").click(function() {
        authApi.signOut();
    });
};

start();
