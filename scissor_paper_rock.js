let userScore = 0;
let computerScore = 0;

let computerSelection = () => {
    let array = ['r', 'p', 's']
    Math.round(Math.random() * 2);
    return array[Math.round(Math.random() * 2)]
}
 

function win(){
    console.log("You Win");
    userScore+=100
    document.getElementById("userScore").innerHTML=`Your Points: ${userScore} `
    document.getElementById("message").innerHTML="You Won!"
};


function lose(){
    computerScore+=100
    console.log("You Lose");
    document.getElementById("computerScore").innerHTML=`Enemy's Points: ${computerScore}`
    document.getElementById("message").innerHTML="You lose"
};


function draw(){
    console.log("Draw")
    document.getElementById("Draw").innerHTML="Draw"
};







function game(UserChoice, ComputerChoice) {
    if (UserChoice + ComputerChoice === 'rp' || UserChoice + ComputerChoice === 'sr' || UserChoice + ComputerChoice === 'ps') {
        lose()
    };
    if (UserChoice + ComputerChoice === 'pr' || UserChoice + ComputerChoice === 'rs' || UserChoice + ComputerChoice === 'sp') {
        win()
    };

    if (UserChoice + ComputerChoice === 'pp' || UserChoice + ComputerChoice === 'ss' || UserChoice + ComputerChoice === 'rr') {
    draw()
};
}
  


function main() {
    document.getElementById("s").addEventListener("click", function () {
        game("s", computerSelection());
    })

    document.getElementById("r").addEventListener("click", function () {
        game("r", computerSelection());
    })

    document.getElementById("p").addEventListener("click", function () {
        game("p", computerSelection());
    })
}

main();






