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
    fight(playerChoice, evylenChoose);
    animateChoices();
    
    
    
}

function paperButton(){
    console.log("You chose paper");
    
    playerChoice = 1;
    evylenMove();
    printChoices();
    fight(playerChoice, evylenChoose);
    animateChoices();
}
//fight before animation so scores are tallied the right way.
//this is based on the current working state of this document.
function scissorsButton(){
    console.log("You chose scissors");
    
    playerChoice = 2;
    evylenMove();
    printChoices();
    fight(playerChoice, evylenChoose);
    animateChoices();
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
            tie();
            printScores();
            printChoices();
        }
        
}

//UI
function playerWin(){
    win();
var myScore = playerScore;
var myScoreElement = document.getElementById('myScore');
    playerScore ++;
   myScoreElement.innerHTML = playerScore;

   printScores();
}
function playerLose(){
    lose();
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
    
    if (playerChoice === 0){
        choiceEcho = 'RocK';
        
    }
    else if (playerChoice === 1){
        choiceEcho = 'PapeR';
        
    }
    else if (playerChoice === 2){
        choiceEcho = 'ScissorS';
        
    }

    if (evylenChoose === 0) {
        evylenChoose = 'Rock';
    }
    else if (evylenChoose === 1) {
        evylenChoose = 'PapeR';
    }
    else if (evylenChoose === 2) {
        evylenChoose = 'ScissorS';
    }
     
    humanAnimationElement.innerHTML = choiceEcho;
    
    evylenAnimationElement.innerHTML = evylenChoose;

}



function lose(){
var herColor = document.getElementById('evylenChoice');
var color = document.getElementById('playerChoice');  

herColor.style.backgroundColor="green"; 
color.style.backgroundColor="red";
herColor.style.color="black";
color.style.color="black";
  }

function win(){
    var herColor = document.getElementById('evylenChoice');
    var color = document.getElementById('playerChoice');  
    
    herColor.style.backgroundColor="red"; 
    color.style.backgroundColor="green";
    herColor.style.color="black";
    color.style.color="black";

      }

function tie(){

      var herColor = document.getElementById('evylenChoice');
    var color = document.getElementById('playerChoice');  
    
    herColor.style.backgroundColor="blue"; 
    herColor.style.color="white";
    color.style.color="white";
    color.style.backgroundColor="blue";
      }