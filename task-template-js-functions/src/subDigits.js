function sumDigits(n) {
	return `${n}`.match(/\d/g).reduce((sum, digit) => sum + +digit, 0);
}

console.log(sumDigits(1234.5));
// niestety nie mam pomyslu ....