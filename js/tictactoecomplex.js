// tictactoe.js

// Wait until the page has loaded.
// Seems not to work unless everything is wrapped in this?
$( document ).ready(function() {

  // Create an empty array for the 9 tiles, a variable for the suit in play,
  // and a variable for the status of the game.
  var gameBoard = new Array(9);
  var playerSuit = 'crosses';
  var gameStatus = '';

  // Set off a function when a tile is clicked, this is where it all goes down.
  $( ".board-tile" ).click(function(){

    // Update DOM, show player selection
    $(this).addClass( "crosses" ).attr("disabled", "disabled").attr("name", "crosses");

    updateGameBoard() // Update array from 'names' on #tiles
    checkForWin(playerSuit) // Check array for player win
    checkForStalemate() // Check array for stalemate
    var gameStatus = checkForStalemate;
    gameStatusCheck() // Finish game if win or stalemate

    setupForComputer('noughts') // Disable all tiles and update prompts
    setTimeout(function(){
      computerMove() // Computer randomly select tile
      updateGameBoard() // Update array from 'names' on #tiles
      checkForWin('noughts') // Check array for computer win
      checkForStalemate() // Check array for stalemate
      gameStatusCheck() // Finish game if win or stalemate
      setupForPlayer('crosses') // Enable available tiles and update prompts
    }, 1000);

  }); // End click function


// ------------------------------------------------------
// Functions


// Game status switch
function gameStatusCheck() {
switch (gameStatus) {
  case 'crosseswins':
    $(".board-tile").attr("disabled", "disabled");
    $(".reset").removeClass("hidden");
    $(".main").text("Game Over");
    $(".sub").text("You win");
    break
  case 'noughtswins':
    $(".board-tile").attr("disabled", "disabled");
    $(".reset").removeClass("hidden");
    $(".main").text("Game Over");
    $(".sub").text("You lose");
    break
  case 'stalemate':
    $(".board-tile").attr("disabled", "disabled");
    $(".reset").removeClass("hidden");
    $(".main").text("Game Over");
    $(".sub").text("Nobody wins");
    break
  default:
}}


// Reset button
$( ".reset" ).click(function(){
  $(".board-tile").removeClass( "crosses" ).removeClass( "noughts" ).removeAttr("disabled").removeAttr("name");
  $(this).addClass("hidden");
  $(".main").text("Your turn");
  $(".sub").text("Choose a tile");
});


// Update array with names (either "", "noughts", or "crosses") of each of the tiles
function updateGameBoard() {
    gameBoard[0] = $('#tile0').attr('name');
    gameBoard[1] = $('#tile1').attr('name');
    gameBoard[2] = $('#tile2').attr('name');
    gameBoard[3] = $('#tile3').attr('name');
    gameBoard[4] = $('#tile4').attr('name');
    gameBoard[5] = $('#tile5').attr('name');
    gameBoard[6] = $('#tile6').attr('name');
    gameBoard[7] = $('#tile7').attr('name');
    gameBoard[8] = $('#tile8').attr('name');
}


// Check for wins
function checkForWin() {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === (playerSuit) ||
      gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] === (playerSuit) ||
      gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] === (playerSuit) ||
      gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] === (playerSuit) ||
      gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === (playerSuit) ||
      gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === (playerSuit) ||
      gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] === (playerSuit) ||
      gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] === (playerSuit)) {
        return playerSuit + "wins";
  else { return "" }
}}


// Check for stalemates
function checkForStalemate () {
  if ( !!gameBoard[0] === true &&
       !!gameBoard[1] === true &&
       !!gameBoard[2] === true &&
       !!gameBoard[3] === true &&
       !!gameBoard[4] === true &&
       !!gameBoard[5] === true &&
       !!gameBoard[6] === true &&
       !!gameBoard[7] === true &&
       !!gameBoard[8] === true) {
         return "stalemate";
  else { return "" }
}}

// Set up for Computer's move
function setupForComputer () {
  var playerSuit = 'noughts';
  $(".board-tile").attr("disabled", "disabled");
  $(".main").text("Computer's turn");
  $(".sub").text("Hold tight");
}


// Set up for Player's move
function setupForPlayer () {
  var playerSuit = 'crosses';
  $(".main").text("Your turn");
  $(".sub").text("Choose a tile");
  for (i = 0; i < 9; i++) {
    if ($('#tile' + i).attr('name') === ''){
      $('#tile' + i).removeAttr("disabled");
}}}


function computerMove () {

  // Create an array of available tiles
  //var availableTiles = newArray();
  //($(#tile0)).attr()

  var computerMove = ("#tile" + [Math.floor(Math.random() * 8)]);
  if ($(computerMove).hasClass("crosses")) {
    alert("crosses");
  }
  else if ($(computerMove).hasClass("noughts")) {
    alert("noughts");
  }
  else {
    // Computer's move changes button to disabled="disabled" and adds .noughts and name="noughts"
    ($(computerMove)).addClass( "noughts" ).attr("disabled", "disabled").attr("name", "noughts");
  }
};


}); // End document ready function
