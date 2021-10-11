function abbrev(s) {
	return s.slice(0, 3) + " " + s.length;
}

abbrev("Nice");
console.log(abbrev("Nice"));
console.log(abbrev("I am your father"));
console.log(abbrev("Supercalifragilisticexpialidocious"));
console.log(abbrev("!"));
console.log(abbrev("Yo"));
