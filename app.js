var buttonTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtarea");
var outputText = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/navi.json"


function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error occured", error);
    alert("Something wrong with server! Try again after some time")
}
function clickHandler(){
   
    var inputTxt = txtInput.value;
    console.log(getTranslationURL(inputTxt));
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var transaltedTxt = json.contents.translated;
        outputText.innerText = transaltedTxt;
        })
    .catch(errorHandler) 
};
buttonTranslate.addEventListener("click",clickHandler);