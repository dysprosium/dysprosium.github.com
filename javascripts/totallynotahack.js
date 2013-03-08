function totallynotahack() {
	var bin;
	function newbin() {
		var x = Math.floor(Math.random() * 90000) + 10000;
		x = parseInt(x);
		var bin = x.toString(2);
		return bin;
	}
	newbin();
	for (i = 1; i < 51; i++) {
		for (j = 1; j < 11; j++) {
			document.write(newbin());
		}
		document.write("\n")
	}
}