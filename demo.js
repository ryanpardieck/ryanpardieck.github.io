/**
 * Created by ryanpardieck on 5/8/16.
 */

var extensionId = "deogklgnkeackbmhmgdfncclfflojglo";

function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}




var port = chrome.runtime.connect(extensionId, {"name": "demoPage"});

chrome.runtime.sendMessage(extensionId, {text: "hello"},
    function(response) {
        // if (!response.success) console.err("test");
        setChildTextNode("demoBeepResults", "beeped");
    });

function demoBeep() {
    port.postMessage({text: "test"});
    setChildTextNode("demoBeepResults", "running...");
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#demoBeep').addEventListener(
        'click', demoBeep);
    document.querySelector('#demoSearch').addEventListener(
        'click', demoSearch);
});