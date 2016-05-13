/**
 * Created by ryanpardieck on 5/8/16.
 */

var extensionId = "hccahhfdcejbbiaplnhjnplajjahoefg";

function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

var Commands = {
    UNKNOWN: 0,
    ERASE: 1,
    WRITE: 2,
    READ: 3
};

//Example keys, useful only as demo
var KEY1 = "452CD30C66D2DAC9530C41F278986489";
var KEY2 = "F32D649E6EBFE79CB687992BB4A8520A";

var KEY3 = "C6BAA8374FF0BA068C89914E5A01C176";
var KEY4 = "143729E23F77C2089A321C83552F7F2E";
var KEY5 = "1E33E916454EA9D331612ADACC3318BA";
var KEY6 = "2963654DB7C781EDD5B6D0DF69584752";
var KEY7 = "D717693EEDA966B9D3C78B6E8CE9029A";
var KEY8 = "9006B9AEDD5F16198F4EA98E5295446D";
var KEY9 = "04497BCC34B52DC8405D122E65EF4ACE";
var KEY10 = "2F29ECB77ECA53975D9EA77C1E123B66";
var KEY11 = "413D5AFE470825D00917DCDD692CB4F0";

var DUMMY_HEADER = "0101C0C0C0C001C0C0C0C0010003";
var DUMMY_CRED = "C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0C0";


function demoRead() {
    checkExtensionIdChange();
    requestRead();
    setChildTextNode("demoReadResults", "running...");
}

function demoWrite() {
    checkExtensionIdChange();
    requestWrite();
    setChildTextNode("demoWriteResults", "running...");
}

function demoErase() {
    checkExtensionIdChange();
    requestErase();
    setChildTextNode("demoEraseResults", "running...");
}

function checkExtensionIdChange() {
    var input = document.getElementById("extensionIdInput");
    if (input.value !== "") extensionId = input.value;
}

function requestErase() {
    var message = makeCommandMsg(Commands.ERASE, "", "", makeExampleKeys());
    chrome.runtime.sendMessage(extensionId, message,
        function(response) {
            console.log("updating erase after seeing msg");
            setChildTextNode("demoEraseResults", JSON.stringify(response));
            alert(JSON.stringify(response));
        });
}

function requestRead() {
    var message = makeCommandMsg(Commands.READ, "", "", makeExampleKeys());
    chrome.runtime.sendMessage(extensionId, message,
        function(response) {
            console.log("updating read after seeing msg");
            setChildTextNode("demoReadResults", JSON.stringify(response));
            alert(JSON.stringify(response));
        });
}

function requestWrite() {
    var message = makeCommandMsg(Commands.WRITE, DUMMY_HEADER, makeExampleCreds(), makeExampleKeys());
    chrome.runtime.sendMessage(extensionId, message,
        function(response) {
            console.log("updating write after seeing msg");
            setChildTextNode("demoWriteResults", JSON.stringify(response));
            alert(JSON.stringify(response));
        });
}


function makeCommandMsg(command, header, creds, keys) {
    return {
        command: command,
        header: header,
        credentials: creds, //Needed only for writes
        keys: keys
    }
}

function makeExampleKeys() {
    return [KEY1, KEY2, KEY3, KEY4, KEY5, KEY6, KEY7, KEY8, KEY9, KEY10, KEY11];
}

function makeExampleCreds() {
    return [DUMMY_CRED, DUMMY_CRED, DUMMY_CRED];
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#demoRead').addEventListener(
        'click', demoRead);
    document.querySelector('#demoWrite').addEventListener(
        'click', demoWrite);
    document.querySelector('#demoErase').addEventListener(
        'click', demoErase);
});