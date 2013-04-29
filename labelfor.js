/*
	Author/Copyright: javakat (javakatdesign@gmail.com)
	
	Labelfor.js
	Label-for fix for IE8. 
	In IE8, clicking a label with a for attribute that targets a particular input will never toggle that input.
	This is a bother because it means cool things like CSS3-only accordions can't exist on IE8.
*/

var labels = document.getElementsByTagName('label');
foreach(var label in labels){
	label.onclick = function () {
		toggle(this.getAttribute('for'));
	};
}

function toggle (IDfor) {
	document.getElementById(IDfor).click();
	return false;
}