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
    if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"))
    {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else
    {
        return `You lose! ${computerSelection} beats ${playerSelection}`
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
btns.forEach(btn => {
    btn.addEventListener
    {
        'click', () => 
        {
            playRound(btn.classList.value);
        }
    }
});