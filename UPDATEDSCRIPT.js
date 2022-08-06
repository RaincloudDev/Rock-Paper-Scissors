var playerScore = 0;
var evylenScore = 0;
var roundNumber = 1;
var evylenChoose = '';
var playerChoice = '';
var choiceEcho = '';

//buttons

function rockButton(){
    console.log("You chose rock");
    
    playerChoice = 0;
    evylenMove();
    printChoices();
    //animateChoices();
    fight(playerChoice, evylenChoose);
    
    
}

function paperButton(){
    console.log("You chose paper");
    
    playerChoice = 1;
    evylenMove();
    printChoices();
    //animateChoices();
    fight(playerChoice, evylenChoose);
}

function scissorsButton(){
    console.log("You chose scissors");
    
    playerChoice = 2;
    evylenMove();
    printChoices();
    //animateChoices();
    fight(playerChoice, evylenChoose);
}

//evylen logic
function evylenMove(){
    const evylenOptions = [0, 1, 2];
    const evylen = Math.floor(Math.random() * evylenOptions.length);
    const evylenChoice = evylenOptions[evylen];

    if (evylenChoice === 0){
        console.log('Evylen chose rock!');
        evylenChoose = 0;
    }
    else if (evylenChoice === 1){
        console.log('Evylen chose paper!');
        evylenChoose = 1;
    }
    else if (evylenChoice === 2){
        console.log('Evylen chose scissors!');
        evylenChoose = 2;
    }
    
}

function printScores(){
    console.log('Evylen has ' + evylenScore + " points.");
    console.log('You have ' + playerScore + " points.");
    
    if (evylenScore > playerScore){
        console.log("You are LOSING!");
    }
    else if(evylenScore < playerScore){
        console.log("You are WINNING!");
    }
}

function fight(playerChoice, evylenChoose){
   
    if(
        (playerChoice === 0 && evylenChoose == 2 ) ||
        (playerChoice === 1 && evylenChoose == 0 ) ||
        (playerChoice === 2 && evylenChoose == 1 )
     )  {
            console.log('KING OF THE CASTLE');
            playerWin();
            printChoices();
        }
    else if(
        (playerChoice === 2 && evylenChoose == 0) ||
        (playerChoice === 0 && evylenChoose == 1) ||
        (playerChoice === 1 && evylenChoose == 2)
     )  {
            console.log('LOSER OF THE GAME');
            playerLose();
            printChoices();
        }
    else if(
        (playerChoice === 0 && evylenChoose == 0) ||
        (playerChoice === 1 && evylenChoose == 1) ||
        (playerChoice === 2 && evylenChoose == 2)
     )  {
            console.log('BOWTIE MACCARONI');
            printScores();
            printChoices();
        }
        
}

//UI
function playerWin(){
var myScore = playerScore;
var myScoreElement = document.getElementById('myScore');
    playerScore ++;
   myScoreElement.innerHTML = playerScore;
   printScores();
}
function playerLose(){
    var herScore = evylenScore;
    var herScoreElement = document.getElementById('herScore');
        evylenScore ++;
       herScoreElement.innerHTML = evylenScore;
       printScores();
    }
function printChoices(){
    console.log((playerChoice) + "<>" + (evylenChoose));
}

function reset(){
    var herScoreElement = document.getElementById('herScore');
    var myScoreElement = document.getElementById('myScore');
    playerScore = 0;
    evylenScore = 0;
    herScoreElement.innerHTML = evylenScore
    myScoreElement.innerHTML = playerScore;
    printScores();
}

function animateChoices(){
    
    var humanAnimation = choiceEcho;
    var humanAnimationElement = document.getElementById('playerChoice');
    var evylenAnimation = evylenChoose;
    var evylenAnimationElement = document.getElementById('evylenChoice');
    
    if (playerChoice = 0){
        choiceEcho = 'rock';
    }
     
    humanAnimationElement.innerHTML = choiceEcho;
    
    evylenAnimationElement.innerHTML = evylenChoose;

}
