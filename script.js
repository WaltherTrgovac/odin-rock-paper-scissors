function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function decodeHtmlEntity(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function changeUI(computerChoice, humanChoice, computerScore, humanScore, computerText, humanText){
        // Change Images
        let computerImg = document.querySelector('.chosen-img-computer');
        let playerImg = document.querySelector('.chosen-img-player');

        switch (computerChoice){
            case "rock":
                computerImg.textContent = decodeHtmlEntity('&#x1F44A');
                break;
            case "paper":
                computerImg.textContent = decodeHtmlEntity('&#x1F590');
                break;
            case "scissors":
                computerImg.textContent = decodeHtmlEntity('&#x270C');
                break;
        }

        switch (humanChoice){
            case "rock":
                playerImg.textContent = decodeHtmlEntity('&#x1F44A');
                break;
            case "paper":
                playerImg.textContent = decodeHtmlEntity('&#x1F590');
                break;
            case "scissors":
                playerImg.textContent = decodeHtmlEntity('&#x270C');
                break;
        }

        // Change score
        let computerScoreEl = document.querySelector('#computer-score');
        let humanScoreEl = document.querySelector('#player-score');

        computerScoreEl.textContent = computerScore;
        humanScoreEl.textContent = humanScore;


        // Change text
        let computerTextEl = document.querySelector('.information-text');
        let humanTextEl = document.querySelector('.main-text');

        computerTextEl.textContent = `Computer chose ${computerText}!`;
        humanTextEl.textContent = `You chose ${humanText}!`;
    }

    function drawPlayAgainButton(){
        let optionsContainer = document.querySelector('.options-container');
        optionsContainer.innerHTML = '<button class="play-again-button">Play Again</button>';
    }

    function resetGame() {
        let playAgainButton = document.querySelector('.play-again-button');

        playAgainButton.addEventListener('click', () => {
            let optionsContainer = document.querySelector('.options-container');
            let computerScoreEl = document.querySelector('#computer-score');
            let humanScoreEl = document.querySelector('#player-score');
            let computerTextEl = document.querySelector('.information-text');
            let humanTextEl = document.querySelector('.main-text');
            let computerImg = document.querySelector('.chosen-img-computer');
            let playerImg = document.querySelector('.chosen-img-player');

            optionsContainer.innerHTML = '<button id="rock">&#x1F44A</button><button id="paper">&#x1F590</button><button id="scissors">&#x270C</button>'
            humanScore = 0;
            computerScore = 0;
            computerScoreEl.textContent = computerScore;
            humanScoreEl.textContent = humanScore;
            computerTextEl.textContent = `Choose your option`;
            humanTextEl.textContent = `First to 5 wins!`;
            computerImg.textContent = decodeHtmlEntity('&#x2753');
            playerImg.textContent = decodeHtmlEntity('&#x2753');
        })
    }

    // There is a better way to write this, but I don't want to introduce anything new
    // that has not been yet introduced in the course.
    function playRound(computerChoice, humanChoice) {
        let computerChoiceLower = computerChoice.toLowerCase();
        let humanChoiceLower = humanChoice.toLowerCase();
        if (humanChoiceLower === "rock" && computerChoiceLower === "scissors"){
            humanScore += 1;
        }

        if (humanChoiceLower === "rock" && computerChoiceLower === "rock"){
            humanScore += 1;
            computerScore += 1;
        }

        if (humanChoiceLower === "rock" && computerChoiceLower === "paper"){
            computerScore += 1;
        }

        if (humanChoiceLower === "paper" && computerChoiceLower === "rock"){
            humanScore += 1;
        }

        if (humanChoiceLower === "paper" && computerChoiceLower === "paper"){
            humanScore += 1;
            computerScore += 1;
        }

        if (humanChoiceLower === "paper" && computerChoiceLower === "scissors"){
            computerScore += 1;
        }

        if (humanChoiceLower === "scissors" && computerChoiceLower === "paper"){
            humanScore += 1;
        }

        if (humanChoiceLower === "scissors" && computerChoiceLower === "scissors"){
            humanScore += 1;
            computerScore += 1;
        }

        if (humanChoiceLower === "scissors" && computerChoiceLower === "rock"){
            computerScore += 1;
        }
        changeUI(computerChoiceLower, humanChoiceLower, computerScore, humanScore, computerChoiceLower, humanChoiceLower);
    }

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
        const chosenWeapon = document.querySelector('.options-container');

        chosenWeapon.addEventListener('click', (e) => {
            switch (e.target){
                case document.querySelector('#rock'):
                    playRound(getComputerChoice(), "rock");
                    break;
                case document.querySelector('#paper'):
                    playRound(getComputerChoice(), "paper");
                    break;
                case document.querySelector('#scissors'):
                    playRound(getComputerChoice(), "scissors");
                    break;
            }

            let informationText = document.querySelector('.information-text');
            let mainText = document.querySelector('.main-text');

            if (humanScore == 5 && computerScore == 5){
                mainText.textContent = "It's a tie!"
                informationText.textContent = '';
                drawPlayAgainButton();
                resetGame();
            }
            if (humanScore == 5){
                mainText.textContent = "Congratulations, you won!"
                informationText.textContent = '';
                drawPlayAgainButton();
                resetGame();
            }
            if (computerScore == 5){
                mainText.textContent = "Computer won this time."
                informationText.textContent = '';
                drawPlayAgainButton();
                resetGame();
            }
        })
    }

    getHumanChoice();
}

playGame();