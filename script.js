function getComputerChoice(){
    let computer_num = Math.floor(Math.random() * 3) + 1;
    let computer_choice = null;

    if (computer_num === 1){
        computer_choice = "rock";
    } else if (computer_num === 2){
        computer_choice = "paper";
    } else {
        computer_choice = "scissors";
    }

    return computer_choice
}

// function getHumanChoice(){
//     console.log(`You chose ${human_choice}`);
//     return human_choice
// }

function playRound(human_choice, computer_choice){
    console.log(`\nYou chose ${human_choice}`);
    console.log(`The computer chose ${computer_choice}`);

    switch(human_choice){
        case "rock":
            if (computer_choice === "rock"){
                console.log("It's a draw!");
            } else if (computer_choice === "paper"){
                console.log("You lose! Paper beats Rock");
                computer_score++;
            } else {
                console.log("You win! Rock beats Scissors");
                human_score++;
            }
            break;

        case "paper":
            if (computer_choice === "rock"){
                console.log("You win! Paper beats Rock");
                human_score++;
            } else if (computer_choice === "paper"){
                console.log("It's a draw!");
            } else {
                console.log("You lose! Scissors beats Paper");
                computer_score++;
            }
            break;
        
        case "scissors":
            if (computer_choice === "rock"){
                console.log("You lose! Rock beats Scissors");
                computer_score++;
            } else if (computer_choice === "paper"){
                console.log("You win! Scissors beats Paper");
                human_score++;
            } else {
                console.log("It's a draw!");
            }
            break;
        
        default:
            console.log("Invalid input, Try again");
    }
}

function playGame(){
    let computer_selection = getComputerChoice();
    playRound(human_choice,computer_selection);
    console.log(`Score: \n\nHuman Score: ${human_score} \nComputer Score: ${computer_score}`);
}

let human_choice = "";
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let computer_score = 0;
let human_score = 0;

rock.addEventListener("click", () => {
    human_choice = "rock"
    playGame(human_score, computer_score);
})

paper.addEventListener("click", () => {
    human_choice = "paper"
    playGame(human_score, computer_score);
})

scissors.addEventListener("click", () => {
    human_choice = "scissors"
    playGame(human_score, computer_score);
})