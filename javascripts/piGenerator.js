function piGenerator() {
	var pi = 0;
	var skip = false;
	var iterations;
	
	while (skip === false) {
		iterations = prompt("How many iterations?");
		var skip1 = true;
		var skip2 = true;
		var skip3 = true;

		if (isNaN(iterations) === true) {
			alert("Please enter a number");
			skip1 = false;
		}
		if (iterations <= 0) {
			alert("Please enter a positive number");
			skip2 = false;
		}
		if (iterations % 1 !== 0 & skip1 === true & skip2 === true) {
			alert("Please enter an integer");
			skip3 = false;
		}
		if (skip1 === true & skip2 === true & skip3 === true) {
			skip = true;
		}
	}
	
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
			document.write(pi + " ");
		}
	}
}
