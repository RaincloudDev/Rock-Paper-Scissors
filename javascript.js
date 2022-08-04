var playerScore = 0;
var evylenScore = 0;
var roundNumber = 1;

function evylenMove(){
//gives evylen random numbers to choose from and prompts
    //the player for a choice

    const evylenOptions = [ 0, 1, 2];
    const evylen = Math.floor(Math.random() *3);
    const evylenChoice = evylenOptions[evylen];
    const message = "which do you choose";
    const playerChoice = prompt(message);
    var playerHex = " ";


    //convert playerChoice into numbers for Evylen to chew on 
    if (playerChoice === "rock") {
            playerHex = "0";
    }
    if (playerChoice === "paper") {
            playerHex = "1";
    }
    if (playerChoice === "scissors") {
            playerHex = "2";
    }

    //evylen's choice converted from number to string for human chewing
    if (evylenChoice == 0) {
        
        console.log("Evylen chose" + " rock");
    }
    else if(evylenChoice == 1) {
        console.log("Evylen chose" + " paper");
    
    }
    else if(evylenChoice == 2) {
        console.log("Evylen chose" + " scissors");
    }

    if (playerHex === "0") {
        console.log("you chose rock");
    }
    else if (playerHex === "1") {
        console.log("you chose paper");
    }
    else if (playerHex === "2") {
        console.log("you chose scissors")
    }
   //DETERMINE WINRAR

    if (playerHex == "0" && evylenChoice == "2") {
        console.log("WINNER");
        playerScore += 1;
        playGame();
    }
        else if (playerHex == "1" && evylenChoice == "0"){
            console.log("WINNER");
            playerScore += 1;
            playGame();
        }
        else if (playerHex == "2" && evylenChoice == "1"){
            console.log("WINNER");
            playerScore += 1;
            playGame();
        }
    
    if (evylenChoice == "0" && playerHex == "2") {
        console.log("LOSER");
        evylenScore += 1;
        playGame();
    }
        else if (evylenChoice == "1" && playerHex == "0"){
            console.log("LOSER");
            evylenScore += 1;
        }
        else if (evylenChoice == "2" && playerHex== "1"){
            console.log("LOSER");
            evylenScore += 1;
        }
        else if (evylenChoice == playerHex) {
            console.log("tie! try again")
        }
    
}
function playAgain(){
    const playAgainMessage = "Take another Whack at it?";
    
    
      
        evylenMove();
       nextLevel();
       
        gameOver();
    
}

function nextLevel(){
    if (playerScore < 5) {
        
        playAgain();

    }
    
}

function gameOver() {
    if (evylenScore, playerScore >= 5) {
    console.log("Game Over!");
    console.log("Evylen scored " + evylenScore + " points!");
    console.log("you scored " + playerScore + " points!");
    }
    if (evylenScore > playerScore && evylenScore == 5) {
        alert("YOU LOST. REFRESH THE PAGE TO TRY AGAIN...");
        evylenScore, playerScore = 0;
        roundNumber = 1;
        
    }
    else if (playerScore > evylenScore && playerScore ==5) {
        alert("YOU WON! CONGRATULATIONS! REFRESH THE PAGE TO TRY AGAIN!!!");
        evylenScore, playerScore = 0;
        roundNumber = 1;
    }
    
    }


function playGame(playerHex, evylenChoice) {
    
    console.log(playerScore);
    }
function diceRoll() {
    const d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const roll = Math.floor(Math.random()*19);
    const result = d20[roll];
    console.log(result);
    
}
evylenMove();
diceRoll();
nextLevel();
playGame();
gameOver();
