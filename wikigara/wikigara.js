document.body.style.fontFamily = "Adobe Garamond Pro";
document.body.style.fontFamily = "EB Garamond 12 Regular";


// max-width: 500px;
// margin-left: auto;
// margin-right: auto;


let otherStyles = `.mw-body p {
  margin: 0.5em 0 1em 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}`;


let styleSheet = document.createElement("style");
styleSheet.innerText = otherStyles;
document.head.appendChild(styleSheet);

let text = document.querySelector(".mw-content-ltr");

function replaceText(context, regEx, replace){
    var childNodes = context.childNodes;
    for (var i = 0; i<childNodes.length; i++) {
        var childNode = childNodes[i];
        if (childNode.nodeType === 3) // 3 is for text node
            childNode.nodeValue = childNode.nodeValue.replace(regEx, replace);
        else if (childNode.nodeType === 1 && childNode.nodeName != "HEAD")
            replaceText(childNode, regEx, replace); 
    }
}
replaceText(text, /'/ig, '’');
replaceText(text, /([A-zÀ-ú,.])(")/ig, function(a, b, c){return b + '”'});
replaceText(text, /(")([A-zÀ-ú,.])/ig, function(a, b, c){return '“' + c});