let compWins = 0;
let playerWins = 0;
function computerChoice() {
	let compPlay = Math.floor(Math.random() * 3);
//	console.log(compPlay);
	let compChoice;
	switch (compPlay) {
		case 0:
			compChoice = "rock";
			break;
		case 1:
			compChoice= "paper";
			break;
		case 2:
			compChoice = "scissors";
			break;
		default:
			compChoice = "ERROR, rand not parsed properly";
	}
		return compChoice;
}
function getPlayerChoice() {
let playerChoice = prompt("Please enter your choice between rock, paper, and scissors").toLowerCase();
	return playerChoice;
}
function playRound(playerSelection, computerSelection) {
	if(playerSelection == computerSelection) {
	console.log("Draw Round. Player and computer both chose " + playerSelection);
		return;
	}
	//While technically valid, this is hacky from what I read. Still beats gross numbers of chained ifs for readability imo
	switch(true) {
		case playerSelection == "rock" && computerSelection == "scissors":
			console.log("Player:Rock | Computer:Scissors | Player wins");
			playerWins++;
			break;
		case playerSelection == "rock" && computerSelection == "paper":
			console.log("Player:Rock | Computer:Paper | Computer wins");
			compWins++;
			break;
		case playerSelection == "scissors" && computerSelection == "paper":
			console.log("Player:Scissors | Computer:Paper | Player wins");
			playerWins++;
			break;
		case playerSelection == "scissors" && computerSelection == "rock":
			console.log("Player:Scissors | Computer:Rock | Computer  wins");
			compWins++;
			break;
		case playerSelection == "paper" && computerSelection == "rock":
			console.log("Player:Paper | Computer:Rock | Player  wins");
			playerWins++;
			break;
		case playerSelection == "paper" && computerSelection == "scissors":
			console.log("Player:Paper | Computer:Scissors | Computer  wins");
			compWins++;
			break;
			//My dear friend HatGuy's contribution to the game
		case playerSelection == "banana":
			console.log("gimme all ur bananas OR ELSE");
			playerWins++;
			break;
		default:
			console.log("Invalid User Input");
			}
}

function game() {
let i = 0;
	while(i<5) {
		console.log("This is round " + (i + 1));
		playRound(getPlayerChoice(),computerChoice());
		i++;
}
if(compWins > playerWins) {
	console.log("The computer has " + compWins + " and the player has " + playerWins + ". Computer wins!");
} else if(playerWins > compWins) {
	console.log("The computer has " + compWins + " and the player has " + playerWins + ". Player wins!");
} else {
	console.log("Draw game!");
}
}

game();
