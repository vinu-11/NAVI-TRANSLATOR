var buttonTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtarea");
var outputText = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/navi.json"


function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error occured", error);
    alert("Somethingw wrong with server! Try again after some time")
}
function clickHandler(){
    console.log(serverURL);
    var inputTxt = txtInput.value;
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var transaltedTxt = json.contents.translated;
        outputDiv.innerText = transaltedTxt;
        })
    .catch(errorHandler) 
};
buttonTranslate.addEventListener("click",clickHandler);