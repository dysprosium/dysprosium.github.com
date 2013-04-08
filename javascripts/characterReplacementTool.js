var chars = new Array();
var replace = new Array();

function characterReplacementEngine(theText) {
	var newText = "";
	for (var i = 0; i < theText.length; i++) {
		var newLetter = theText.substr(i, 1);
		for (var j = 0; j < chars.length; j++) {
			if (newLetter === chars[j]) {
				newLetter = replace[j];
				break;
			}
		}
		newText += newLetter;
	}
	return newText;
}

function characterReplacementTool() {
	CTR = charactersToReplace.value;
	CTRW = charactersToReplaceWith.value;
	chars = new Array();
	replace = new Array();

	if (CTR.length !== CTRW.length) {
		alert("Please input equal amounts of characters in the first two input fields.");
		throw "fail";
	} else if (CTR.length === 0) {
		alert("Please input at least one character in each input field.");
		throw "fail";
	}

	for (k = 0; k < CTR.length; k++) {
		chars[k] = CTR.substr(k, 1);
		replace[k] = CTRW.substr(k, 1);
	}
	crtMessage.value = characterReplacementEngine(crtMessage.value);
}