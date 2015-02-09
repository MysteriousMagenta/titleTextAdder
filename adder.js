// ==UserScript==
// @name         TitleText Adder
// @version      0.1
// @description  Adds the title text, when present, under an image.
// @author       Myst
// @match        *
// @grant        none
// ==/UserScript==

function addText(image) {
    var text = image.title;
    if (text) {
        var textElement = document.createElement("p");
        textElement.style["text-align"] = "center";
        textElement.style["font-style"] = "italic";
        textElement.innerText = text;
        image.parentNode.insertBefore(textElement, image.nextSibling);
    }
}

function execAll() {
    for (var i=0; i < document.images.length; i++) {
        addText(document.images[i]);
    }
}

execAll();