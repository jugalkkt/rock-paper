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