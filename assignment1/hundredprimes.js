#!/usr/bin/env node

var i;
var numOfPrimes = 0;
var out = "";

var isPrime = function(num) {
	var j;
	for (var j = 2; j <= Math.sqrt(num); j++) {
		if (num % j == 0) {
			return false;
		}
	}
	return true;
};

for (var i = 2; i < 999999999999999; i++) {
	if (isPrime(i)) {
		numOfPrimes++;
		out = out + i + ",";
	}
	if (numOfPrimes == 100) {
		break;
	}
}

var fs = require('fs');
var outfile = "hundredprimes.txt";
out = out.substring(0, out.length - 2);
fs.writeFileSync(outfile, out);
