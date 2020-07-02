// All code should be written in this file.
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue; 

// Function to pass in parameters type and moves of the players.
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    //If no values entered
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }
    //If not valid type is entered
    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }
    //If not valid value is entered 
    if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) ||!isValidMoveValue(moveThreeValue)) {
        return;
    }
    // If entered values are too big
    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }
    // Assigning the entered values 
    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}
// Function to validate the passed type
function isValidMoveType(moveType){
    return (moveType ==='rock') || (moveType === 'paper') || (moveType === 'scissors');
}

//Functon to validate the passed value
function isValidMoveValue(moveValue){
    return (moveValue >=1) && (moveValue<=99);
}

//Function to find the round winner
function getRoundWinner(roundNumber){
    switch(roundNumber){
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue); 
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue); 
        case 3: 
            return getMoveWinner(playerOneMoveThreeType,playerOneMoveThreeValue,playerTwoMoveThreeType,playerTwoMoveThreeValue); 
        default:
            return null;
    }
}

//Helper Function to find the move winner 
function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType,playerTwoMoveValue) {
    //If no value entered 
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }
    //Case move types are equal
    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';    
        } else {
            return 'Tie';
        }
    }

    if (playerOneMoveType === 'rock') {
        if (playerTwoMoveType === 'scissors') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    } else if (playerOneMoveType === 'paper') {
        if (playerTwoMoveType === 'rock') {
            return 'Player One';
        } else {
           return 'Player Two';
        }
    } else {
        if (playerTwoMoveType === 'paper') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    }
}

//Function to find out the game winner 
function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType || !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue ||!playerTwoMoveOneType || !playerTwoMoveTwoType ||        !playerTwoMoveThreeType || !playerTwoMoveOneValue ||!playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
    }
    playerOneWins = 0;
    playerTwoWins = 0;
  
    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);
  
    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);
    
    if (playerOneWins > playerTwoWins) {
       return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
       return 'Player Two';
    } else {
       return 'Tie';
    }
  }
// Helper function to game winner function
function addWin(winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    } else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1;
    }
}

//Function for playong vs PC 
function setComputerMoves() {
    const moves = ['rock', 'paper', 'scissors'];
    const moveOneType = moves[Math.floor(Math.random() * 3)];
    const moveTwoType = moves[Math.floor(Math.random() * 3)];
    const moveThreeType = moves[Math.floor(Math.random() * 3)];
    const moveOneValue = Math.floor(Math.random() * 96) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
  }