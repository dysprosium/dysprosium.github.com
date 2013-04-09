var echarsl = "o-PtjIO(paA|:\"<y)Y4~_FGu`zWE^Kb=}?RqrxT!5CD6X3dfgVnmQew&iL+{%>ShJ890BNsklM127@#$[]\\;',./HcvZ*U ";
var dcharsl = " U*ZvcH/.,';\\][$#@721MlksNB098JhS>%{+Li&weQmnVgfd3X6DC5!TxrqR?}=bK^EWz`uGF_~4Y)y<\":|Aap(OIjtP-o";
var dchars = new Array();
var echars = new Array();
var chars = new Array();

for (var i = 0; i < echarsl.length; i++) {
	echars[i] = echarsl.substr(i, 1);
	dchars[i] = dcharsl.substr(i, 1);
}

function encryptionAlgorithm(EnDe, theText, eKey) {
	var keyNum = "7";
	var newText = "";
	var keyAdd = new Array();
	var keyOp = new Array();
	var theKey = "117"

	if (EnDe === "encrypt") {
		chars = echars;
	} else {
		chars = dchars;
	}

	for (var o = 0; o < eKey.length; o++) {
		var _key;
		for (var p = 0; p < echars.length; p++) {
			if (eKey.substr(o, 1) === echars[p]) {
				_key = p + 7;
				break;
			} else if (p === echars.length - 1) {
				_key = 1;
			}
		}
		_key = _key.toString();
		theKey = theKey.toString();
		theKey += _key;
	}

	for (var j = 0; j < theKey.length; j++) {
		switch (j % 4) {
			case 0:
				keyOp[j] = "+";
				break;
			case 1:
				keyOp[j] = "-";
				break;
			case 2:
				keyOp[j] = "x";
				break;
			case 3:
				keyOp[j] = "÷";
				break;
		}
	}

	for (var k = 0; k < theText.length; k++) {
		var l = k % theKey.length;
		switch (keyOp[l]) {
			case "+":
				keyNum = parseInt(theKey.substr(l, 1)) + parseInt(keyNum);
				keyAdd[k] = keyNum;
				keyNum %= 2401;
				break;
			case "-":
				keyNum = Math.abs(keyNum -= theKey.substr(l, 1));
				keyAdd[k] = keyNum;
				keyNum %= 2401;
				break;
			case "x":
				keyNum *= theKey.substr(l, 1);
				keyAdd[k] = keyNum;
				keyNum %= 2401;
				break;
			case "÷":
				keyNum = Math.floor(keyNum /= theKey.substr(l, 1) + 1);
				keyAdd[k] = keyNum;
				keyNum %= 2401;
				break;
		}
	}

	for (var m = 0; m < theText.length; m++) {
		var charNum;
		for (n = 0; n < chars.length; n++) {
			if (theText.substr(m, 1) === chars[n]) {
				charNum = n;
				break;
			} else if (n === chars.length - 1) {
				if (EnDe === "encrypt") {
					charNum = chars.length - 1;
				} else {
					charNum = 0;
				}
			}
		}
		newText += chars[(charNum + keyAdd[m]) % (chars.length)];
	}

	return newText;
}

