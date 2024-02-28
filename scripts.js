function getComputerChoice()
{
    let x = Math.floor(Math.random() * 3) + 1
    switch (x)
    {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}
function playRound(playerSelection, computerSelection) 
{
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) 
    {
        return 0;
    }
    else if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"))
    {
        return 1;
    }
    else
    {
        return -1;
    }
}
function playGame()
{
    let playerScore = computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Enter your choice: ")
        let computerSelection = getComputerChoice().toLowerCase()
        let result = playRound(playerSelection, computerSelection)
        console.log(result)
        if (/You win!/.test(result)) ++playerScore;
        else ++computerScore;
    }
    if (playerScore > computerScore) console.log(`You win! You scored ${playerScore} points and computer score ${computerScore}`)
    else console.log(`You lose! You scored ${playerScore} points and computer score ${computerScore}`)    
}

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const btns = document.querySelectorAll('button');
const results = document.querySelector('.results');
let score = document.querySelector('.score');
let roundResult = document.querySelector('.roundResult');
let scorePlayer = scoreComputer = 0;

function displayScore()
{
    score.textContent = `player: ${scorePlayer}\tcomputer: ${scoreComputer}`;
}
function displayResults()
{
    if (scorePlayer > scoreComputer) results.textContent = "player wins!";
    else results.textContent = "player loses!";
}


btns.forEach(btn => {
    let computerChoice = getComputerChoice();
    btn.addEventListener
    (
        'click', () => 
        {
            let roundResult = playRound(btn.classList.value, getComputerChoice());
            switch (roundResult)
            {
                case 0:
                    break;
                case 1:
                    ++scorePlayer;
                    displayScore();
                    break;
                case -1:
                    ++scoreComputer;
                    displayScore();
                    break;
            }
            if (scorePlayer >= 3 || scoreComputer >=3)
            {
                displayResults();
            }
        }
    )
});
