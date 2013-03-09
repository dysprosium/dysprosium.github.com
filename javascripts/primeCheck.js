var primeCheck = function() {
	var number;
	var primeValue;
	var divisor;
	var skip = true;

	while (skip !== false) {
		number = (prompt("Find out if the number is prime:"));
		var skip1 = false;
		var skip2 = false;
		var skip3 = false;
		var skip4 = false;
		var skip5 = false;
		if (number == 1) {
			alert ("The number is not prime");
			skip1 = true;
		} if (number == 2) {
			alert ("The number is prime");
			skip2 = true;
		} if (isNaN(number) === true) {
			alert ("Please enter a valid number");
			skip3 = true;
		} if (number < 1) {
			alert ("Please enter a valid number");
			skip4 = true;
		} if (number % 1 !== 0 & skip2 !== true) {
			alert ("Please enter a valid number");
			skip5 = true;
		} if (skip1 === false & skip2 === false & skip3 === false & skip4 === false) {
			skip = false;
		}
	}

	for (divisor = 2; divisor < Math.sqrt(number) + 1; divisor++) {
		if (number % divisor === 0) {
			primeValue = 1;
			break;
		}
	}

	if (primeValue == 1) {
		alert ("The number is not prime");
	} else {
		alert ("The number is prime");
	}
}; // max number = 8999999999999999
