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