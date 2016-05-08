/**
 * Created by ryanpardieck on 5/8/16.
 */

var extensionId = "nflmjcoaoekclickbikmjoepiekcpggl";

function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}





chrome.runtime.sendMessage(extensionId, {command: "beep plz"},
    function(response) {
        // setChildTextNode("demoBeepResults", response.response);
    });

function requestBeep() {
    chrome.runtime.sendMessage(extensionId, {command: "beep plz"},
        function(response) {
            if (response.command === "beep plz"){
                console.log("updating beep after seeing msg");
                setChildTextNode("demoBeepResults", response.response);
            }
        });
}

function requestSearch() {
    chrome.runtime.sendMessage(extensionId, {command: "search"},
        function(response) {
            if (response.command === "search") {
                console.log("updating search after seeing msg");
                setChildTextNode("demoSearchResults", response.response);
            }
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