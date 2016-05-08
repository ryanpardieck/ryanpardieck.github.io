/**
 * Created by ryanpardieck on 5/8/16.
 */

var extensionId = "nflmjcoaoekclickbikmjoepiekcpggl";

function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}





chrome.runtime.sendMessage(extensionId, {text: "beep plz"},
    function(response) {
        setChildTextNode("demoBeepResults", response.text);
    });

function requestBeep() {
    chrome.runtime.sendMessage(extensionId, {text: "beep plz"},
        function(response) {
            setChildTextNode("demoBeepResults", response.text);
        });
}

function requestSearch() {
    chrome.runtime.sendMessage(extensionId, {text: "search"},
        function(response) {
            setChildTextNode("demoBeepResults", response.text);
        });
}

function demoBeep() {
    requestBeep();
    setChildTextNode("demoBeepResults", "running...");
}

function demoSearch() {
    requestSearch();
    setChildTextNode("demoSearchResults", "running...");
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#demoBeep').addEventListener(
        'click', demoBeep);
    document.querySelector('#demoSearch').addEventListener(
        'click', demoSearch);
});