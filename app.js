var buttonClicked = document.querySelector("#btn-click");
var textInput = document.querySelector("#textinput");
var outputDiv= document.querySelector("#output");

//var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
     return serverURL + "?" + "text=" + text
}

function errorHandler(error){
     console.log("error occured! ", error )
     alert("server is down! try again after some time")
}

function clickHandler() {
     //input
     var inputText = textInput.value;
     
     //processing
     fetch(getTranslatedURL(inputText))
     .then(response=> response.json())
     .then(json => {
          var translatedText= json.contents.translated;
          outputDiv.innerText= translatedText;//output
          })
     .catch(errorHandler)
};

buttonClicked.addEventListener("click", clickHandler);