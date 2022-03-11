


function game(){
    const compChoices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * compChoices.length);
    let randomChoice = compChoices[random];
    let playerChoice = prompt("What is your choice, rock, paper, or scissors?");
    if (playerChoice.toLowerCase() == "rock"){
        if (randomChoice == "rock"){
            alert("It's a tie!");
        } else if (randomChoice == "paper"){
            alert("You lose, paper wins with rock!");

        } else {
            alert("You win, rock beats scissors!");
        }
    } else if (playerChoice.toLowerCase() == "paper"){
        if (randomChoice == "rock"){
            alert("You win, paper beats rock!");
        } else if (randomChoice == "scissors"){
            alert("You lose, scissors cut paper : (");
        } else {
            alert("It's a tie!");
        }

    } else if (playerChoice.toLowerCase() == "scissors"){
        if (randomChoice == "rock"){
            alert("You lose, rock beats scissors : (");
        } else if (randomChoice == "paper"){
            alert("You win, scissors cut paper!");
        } else {
            alert("It's a tie!")
        }
    }
}

while (true){
    game();
}
