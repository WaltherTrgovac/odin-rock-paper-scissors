function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let randomChoice = Math.floor(Math.random() * 3);

        switch (randomChoice){
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }

    function getHumanChoice() {
        let humanChoice = prompt("Pick between rock, paper or scissors.")

        if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
            console.log("Your input is incorrect.")
        } else {
            return humanChoice;
        }
    }

    // There is a better way to write this, but I don't want to introduce anything new
    // that has not been yet introduced in the course.
    function playRound(humanChoice, computerChoice) {
        let humanChoiceLower = humanChoice.toLowerCase();
        let computerChoiceLower = computerChoice.toLowerCase();
        if (humanChoiceLower === "rock" && computerChoiceLower === "scissors"){
            console.log("You win! Rock beats scissors.");
            humanScore += 1;
        }

        if (humanChoiceLower === "rock" && computerChoiceLower === "rock"){
            console.log("It's a tie! You both chose rock.");
            humanScore += 1;
            computerScore += 1;
        }

        if (humanChoiceLower === "rock" && computerChoiceLower === "paper"){
            console.log("You lose! Paper beats rock.");
            computerScore += 1;
        }

        if (humanChoiceLower === "paper" && computerChoiceLower === "rock"){
            console.log("You win! Paper beats rock.");
            humanScore += 1;
        }

        if (humanChoiceLower === "paper" && computerChoiceLower === "paper"){
            console.log("It's a tie! You both chose paper.");
            humanScore += 1;
            computerScore += 1;
        }

        if (humanChoiceLower === "paper" && computerChoiceLower === "scissors"){
            console.log("You lose! Scissors beats paper.");
            computerScore += 1;
        }

        if (humanChoiceLower === "scissors" && computerChoiceLower === "paper"){
            console.log("You win! Scissors beats paper.");
            humanScore += 1;
        }

        if (humanChoiceLower === "scissors" && computerChoiceLower === "scissors"){
            console.log("It's a tie! You both chose scissors.");
            humanScore += 1;
            computerScore += 1;
        }

        if (humanChoiceLower === "scissors" && computerChoiceLower === "rock"){
            console.log("You lose! Rock beats scissors.");
            computerScore += 1;
        }
    }

    alert("Welcome to the game of rock paper scissors. You will be playing 5 rounds. Good luck!")
    for (let i = 1; i <= 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`SCORE: You: ${humanScore}, Computer: ${computerScore}`)
        if (i === 5){
            if (humanScore > computerScore){
                console.log("Congratulations! You won!")
            } else if (humanScore < computerScore){
                console.log("Computer won!")
            } else {
                console.log("The game ended with a tie.")
            }
        }
    }
}

playGame();
