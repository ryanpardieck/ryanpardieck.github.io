/**
 * Created by ryanpardieck on 5/8/16.
 */

var extensionId = "nflmjcoaoekclickbikmjoepiekcpggl";

function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}




// var port = chrome.runtime.connect(extensionId, {"name": "demoPage"});

chrome.runtime.sendMessage(extensionId, {text: "hello"},
    function(response) {
        // if (!response.success) console.err("test");
        setChildTextNode("demoBeepResults", response.text);
    });

function requestBeep() {
    chrome.runtime.sendMessage(extensionId, {text: "beep plz"},
        function(response) {
            // if (!response.success) console.err("test");
            setChildTextNode("demoBeepResults", response.text);
        });
}

function demoBeep() {
    // port.postMessage({text: "test"});
    requestBeep();
    setChildTextNode("demoBeepResults", "running...");
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#demoBeep').addEventListener(
        'click', demoBeep);
    document.querySelector('#demoSearch').addEventListener(
        'click', demoSearch);
});