function printVowels(str) {
	return str.match(/[aeiou]/ig);
}
printVowels("hello world");
console.log(printVowels("hello world"));
console.log(printVowels("kangaroo"));
console.log(printVowels("cheeseburger"));
console.log(printVowels("rhythm"));