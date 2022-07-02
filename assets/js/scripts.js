$(function(){
      const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjU2NDE4MTk1LCJvcmdhbml6YXRpb25JZCI6MTYzMzM0LCJqdGkiOiJmYzA3Nzg3My1mNDZkLTRiNDEtOWMyZS02MWFhNjFlNmFlMjcifQ.qeXf5ZwgcZ7x9LlBx8tOrvcyHng3bUv1raAkptSbons";
      //const fetch = require('cross-fetch');

     // console.log("API_KEY:", API_KEY);

      fetch("https://api.whereby.dev/v1/meetings", {
            method: "POST",
            mode: "no-cors",
            headers: {
                  "Authorization": API_KEY,
                  "Content-Type": "application/json",
                  //"Access-Control-Allow-Origin": *
            },
            body: JSON.stringify({
                  endDate: "2022-07-04 00:00:00",
                  fields: "hostRoomURL",
            })
      }).then(function (result) {
            console.log("Whereby result:", result);
            $("#whereby-demo").attr("src", result.roomURL);
      }).catch(function (error) {
            console.log("Whereby error:", error);
      })

});