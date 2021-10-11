const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
		return userInput;
	} else {
		console.log('Error!');
	}
};

function rockPaperScissors(playerOne, playerTwo) {


	if (playerOne === playerTwo) {
		return 'draw';
	} if (playerOne === 'rock') {
		if (playerTwo === 'paper') {
			return 'Second player wins'
		} else {
			return 'First player wins'
		}
	}

	if (playerOne === 'paper') {
		if (playerTwo === 'scissors') {
			return 'Second player wins';
		} else {
			return 'First player wins';
		}
	}

	if (playerOne === 'scissors') {
		if (playerTwo === 'rock') {
			return 'First player wins';
		} else {
			return 'Second player wins';
		}
	}

}

rockPaperScissors();
console.log(rockPaperScissors('rock', 'scissors'))