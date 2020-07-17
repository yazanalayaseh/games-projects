let userScore = 0;
let computerScore = 0;

let ComputerChoice = ()=> {
    let array = ['r', 'p', 's']
    Math.round(Math.random() *2);
    return array[Math.round(Math.random() *2)]
}

console.log(ComputerChoice())









function game(UserChoice, ComputerChoice){
console.log(ComputerChoice, UserChoice)
}

function game(u,c){
    if(UserChoice+ComputerChoice ==='rp' || UserChoice+ComputerChoice ==='sr' || UserChoice+ComputerChoice ==='ps'){
    lose()
    }
     if(UserChoice+ComputerChoice ==='pr' || UserChoice+ComputerChoice ==='rs' || UserChoice+ComputerChoice ==='sp'){
    win()
    }
  }
   if(UserChoice+ComputerChoice ==='pp' || UserChoice+ComputerChoice ==='ss' || UserChoice+ComputerChoice ==='rr'){
    draw()
    }
  }
  }


function main(){
    document.getElementById("s").addEventListener("click", function(){
        game("s", computerSelection());
    })

    document.getElementById("r").addEventListener("click", function(){
        game("r");
    })

     document.getElementById("p").addEventListener("click", function(){
        game("p");
    })
}

main();






