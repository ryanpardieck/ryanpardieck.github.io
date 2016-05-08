/**
 * Created by ryanpardieck on 5/8/16.
 */


function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}


function demoBeep() {
    setChildTextNode("demoBeepResults", "running...");
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#demoBeep').addEventListener(
        'click', demoBeep);
    document.querySelector('#demoSearch').addEventListener(
        'click', demoSearch);
});