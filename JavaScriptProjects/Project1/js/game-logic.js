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

