var playerScore = 0;
var evylenScore = 0;
var roundNumber = 1;
var evylenChoose = '';
var playerChoice = '';

//buttons

function rockButton(){
    console.log("You chose rock");
    
    playerChoice = 0;
    evylenMove();
    //printScores();
    fight(playerChoice, evylenChoose);
    
}

function paperButton(){
    console.log("You chose paper");
    
    playerChoice = 1;
    evylenMove();
   // printScores();
   fight(playerChoice, evylenChoose);
}

function scissorsButton(){
    console.log("You chose scissors");
    
    playerChoice = 2;
    evylenMove();
   //printScores()
   fight(playerChoice, evylenChoose);
}

//evylen logic
function evylenMove(){
    const evylenOptions = [0, 1, 2];
    const evylen = Math.floor(Math.random() *3);
    const evylenChoice = evylenOptions[evylen];

    if (evylenChoice === 0){
        console.log('Evylen chose rock!');
        evylenChoose == 0;
    }
    else if (evylenChoice === 1){
        console.log('Evylen chose paper!');
        evylenChoose == 1;
    }
    else if (evylenChoice === 2){
        console.log('Evylen chose scissors!');
        evylenChoose == 2;
    }
    
}

function printScores(){
    console.log('Evylen has ' + evylenScore + " points.");
    console.log('You have ' + playerScore + " points.");
    
    if (evylenScore > playerScore){
        console.log("You are LOSING!")
    }
    else if(evylenScore < playerScore){
        console.log("You are WINNING!")
    }
}

function fight(playerChoice, evylenChoose){
    if(
        (playerChoice == 0 && evylenChoose == 2) ||
        (playerChoice == 1 && evylenChoose == 0) ||
        (playerChoice == 2 && evylenChoose == 1)
     )  {
            console.log('KING OF THE CASTLE');
            playerWin();
        }
    else if(
        (playerChoice == 2 && evylenChoose == 0) ||
        (playerChoice == 0 && evylenChoose == 1) ||
        (playerChoice == 1 && evylenChoose == 2)
     )  {
            console.log('LOSER OF THE GAME');
            playerLose();
        }
    else if(
        (playerChoice == 0 && evylenChoose == 0) ||
        (playerChoice == 1 && evylenChoose == 1) ||
        (playerChoice == 2 && evylenChoose == 2)
     )  {
            console.log('BOWTIE MACCARONI');
            printScores();
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


function reset(){
    var herScoreElement = document.getElementById('herScore');
    var myScoreElement = document.getElementById('myScore');
    playerScore = 0;
    evylenScore = 0;
    herScoreElement.innerHTML = evylenScore
    myScoreElement.innerHTML = playerScore;
    printScores();
}