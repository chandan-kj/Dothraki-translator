var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#translate-btn");
var txtOutput = document.querySelector("#output-box");

var serverUrl = "https://api.funtranslations.com/translate/dothraki.json"

function urlConstruct(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Site is down try again after sometime")
}

function clickHandler() {
    var textInput = txtInput.value;

    fetch(urlConstruct(textInput))
        .then(response => response.json())
        .then(json => {
            var textTranslated = json.contents.translated;
            txtOutput.innerHTML = textTranslated
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);