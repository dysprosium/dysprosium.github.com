function totallynotahack() {
	for (i = 1; i < 10001; i++) {
		for (j = 1; j < 16; j++) {
			var x = Math.floor(Math.random() * 90000) + 10000;
			x = parseInt(x, 10);
			var bin = x.toString(2);
			document.write(bin);
		}
		document.write("\n");
	}
}
