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
			compChoice = "ERROR, random number  not generated properly";
	}
		return compChoice;
}
const runningTotal = document.querySelector('#running-total');
const section = document.querySelector('#game-state');
const result = document.createElement('section');
result.classList.add('running-totals');
result.textContent = 'Welcome to RPS VR, Game of Kings';
section.appendChild(result);
const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
	button.addEventListener('click', (e) => {
		playRound(button.id,computerChoice());

	});
});
function playRound(playerSelection, computerSelection) {
	if(playerSelection == computerSelection) {
		result.textContent = "Draw game!";
		return;
	}
	result.textContent = "Player chose " + playerSelection + " and computer chose " + computerSelection;
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
			runningTotal.textContent = "Player:" + playerWins + " | Computer:" + compWins;

			if( playerWins === 5) {
				result.textContent = "Player wins, first to 5";
				compWins = 0;
				playerWins = 0;
			} else if( compWins === 5) {
				result.textContent = "Computer wins, first to 5";
				compWins = 0;
				playerWins = 0;
			}
}
