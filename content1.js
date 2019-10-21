//Requiring Images
var exclamation_mark_png = chrome.extension.getURL('exclamation-mark.png');

var inject_true = '<div id="detect"><p style=\'color: green\'>This product contains allergens.</p>' +
    '<img id="warning_img" width="7%" src="'+ exclamation_mark_png +'"></div>' 

document.getElementById("price").innerHTML = inject_true;

