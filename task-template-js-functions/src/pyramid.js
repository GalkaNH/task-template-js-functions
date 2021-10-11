function pyramid(rows, isReverse) {
	const indexes = new Array(rows).fill(0).map((_, i) => i);
	if (isReverse) indexes.reverse();
	for (let i of indexes) {
		const spaces = ' '.repeat(rows - 1 - i);
		console.log(spaces + '#'.repeat(1 + i * 2) + spaces);
	}
}


pyramid(9);
