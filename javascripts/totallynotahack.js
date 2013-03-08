function totallynotahack() {
	var bin;
	function newbin() {
		var x = Math.floor(Math.random() * 90000) + 10000;
		x = parseInt(x, 10);
		var bin = x.toString(2);
		return bin;
	}
	newbin();
	for (i = 1; i < 1001; i++) {
		for (j = 1; j < 12; j++) {
			document.write(newbin());
		}
		document.write("\n");
	}
}