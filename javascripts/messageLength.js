function messageLength() {
	var message = prompt("Enter your message");
	var characters = message.length;
	var words = 1;

	for (var i = 1; i <= message.length; i++) {
		if (message.substr(i, 1) === " ") {
			words++;
		}
	}

	alert("characters: " + characters + "\nwords: " + words);
}
