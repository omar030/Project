let userScore = 0;
let ComputerScore= 0;
const userScore_span = document.getElementById("user-score");
const ComputerScore_span = document.getElementById("computer-score");
const userhearts = document.querySelector("#user-heart > img");
// const computerhearts = document.querySelectorAll("#computer-heart");
// const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
    
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice){
        
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break
        case "rockspaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice,computerChoice);
            break
        case "rockrock":
        case "paperpaper":
        case "scissors":
            draw(userChoice,computerChoice);
            break
    }

}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    ComputerScore_span.innerHTML = ComputerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
    // removeHearts(userScore, ComputerScore)
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    ComputerScore++;
    ComputerScore_span.innerHTML = ComputerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${computerChoice} beats ${userChoice}. You lost.`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
    removeHearts(ComputerScore);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice} can not beat ${computerChoice}. It is a draw.`;
    userChoice_div.classList.add("white-glow");
    setTimeout(() => userChoice_div.classList.remove("white-glow"), 300);
}

function removeHearts(ComputerScore){

        // computerhearts.remove(".computer-heart" + userScore);
        userhearts.remove(".computer-heart" + ComputerScore);
}

function main(){
    rock_div.addEventListener('click',() => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}
main();


//INICIO 

const ComputerScore_span = document.getElementById("computer-score");
const userhearts = document.querySelector("#user-heart");
// const computerhearts = document.querySelectorAll("#computer-heart");
// const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
var userScore = 0;
var ComputerScore = 0;
var userScore_span = document.getElementById("user-score");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
    
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice){
        
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break
        case "rockspaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice,computerChoice);
            break
        case "rockrock":
        case "paperpaper":
        case "scissors":
            draw(userChoice,computerChoice);
            break
    }

}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);    
    userScore++;
    userScore_span.innerHTML = userScore;
    ComputerScore_span.innerHTML = ComputerScore;
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
    //si el contador es mayor que 3 (cantidad de vidas que tiene)
    if(userScore > 3){
      //se muestra mensaje de fin de partida
      alert("Ya no se puede jugar mas! Fin de la partida");
    }else{
      //si no se elimina un corazon del usuario
      removeHearts(userScore);
    }
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    ComputerScore++;
    ComputerScore_span.innerHTML = ComputerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${computerChoice} beats ${userChoice}. You lost.`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
    //si el contador es mayor que 3 (cantidad de vidas que tiene)
    if(userScore > 3){
      //se muestra mensaje de fin de partida
      alert("Ya no se puede jugar mas! Fin de la partida");
    }else{
      //si no se elimina un corazon de la computadora
      removeHearts(userScore);
    }
    
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice} can not beat ${computerChoice}. It is a draw.`;
    userChoice_div.classList.add("white-glow");
    setTimeout(() => userChoice_div.classList.remove("white-glow"), 300);
}

function removeHearts(ComputerScore){
        console.log(ComputerScore);
        console.log(userhearts); //veo el padre en consola --> con todos sus hijos
        //selecciono el hijo a eliminar
        var hijo = userhearts.querySelector(".user-heart" + ComputerScore);
        console.log(hijo)//veo el hijo en consola
        userhearts.removeChild(hijo);//elimino el hijo 
}

function main(){
    rock_div.addEventListener('click',() => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}
main();
// FIN ***********************************
