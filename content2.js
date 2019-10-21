//Requiring Images
var checked_mark_png = chrome.extension.getURL('checked-mark.png');

var inject_false = '<div id="detect"><p style=\'color: green\'>This product is allergen free.</p>' +
    '<img id="warning_img" width="7%" src="'+ checked_mark_png +'"></div>'

document.getElementById("price").innerHTML = inject_false;


