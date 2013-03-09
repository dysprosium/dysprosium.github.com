function piGenerator() {
	var pi = 0;
	var iterations = prompt("How many iterations?");
	var basicMode = confirm("Would you like to use basic mode?");
	var n = 1;

	if (basicMode === true) {
		for (i = 0; i <= iterations; i++) {
			pi = pi + (4 / n) - (4 / (n + 2));
			n = n + 4;
		}
		alert("After " + iterations + " iterations, the calculated value of pi is:\n" + pi);
	} else {
		for (i = 0; i <= iterations; i++) {
			pi = pi + (4 / n) - (4 / (n + 2));
			n = n + 4;
			document.write(pi + "\n");
		}
	}
}
