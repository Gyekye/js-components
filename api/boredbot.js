const requestUrl = "https://apis.scrimba.com/bored/api/activity";
const apiCallTrigger = document.getElementById("call-activity-api");


// function to call activity api-
const callApi = () => {
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("message-container").innerHTML = `<p> ${data.activity}</p>`;
        });
};

// eventlistner to trigger api call
apiCallTrigger.addEventListener("click",callApi);