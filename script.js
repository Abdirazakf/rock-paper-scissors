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
    }
}

function playGame(){
    let computer_selection = getComputerChoice();
    playRound(human_choice,computer_selection);
    if (human_score == 5){
        console.log("You Won!")
        scoreLine.textContent = `Final score: Player (${human_score}) Computer (${computer_score}), You Win!`
    } else if (computer_score == 5){
        console.log("You Lost :(")
        scoreLine.textContent = `Final score: Player (${human_score}) Computer (${computer_score}), You Lose :(`
    }
}

let human_choice = "";
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const statBox = document.querySelector("#stats")
let computer_score = 0;
let human_score = 0;

rock.addEventListener("click", () => {
    human_choice = "rock"
    if (human_score < 5 && computer_score < 5){
      playGame(human_score, computer_score);      
    }
})

paper.addEventListener("click", () => {
    human_choice = "paper"
    if (human_score < 5 && computer_score < 5){
      playGame(human_score, computer_score);      
    }
})

scissors.addEventListener("click", () => {
    human_choice = "scissors"
    if (human_score < 5 && computer_score < 5){
      playGame(human_score, computer_score);  
    }
})

const scoreLine = document.createElement("div")
const playAgainButton = document.createElement("button")
playAgainButton.setAttribute("class", "again-button")
scoreLine.setAttribute("class", "score")
statBox.appendChild(scoreLine)