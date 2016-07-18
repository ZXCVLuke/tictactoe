// tictactoe.js

// Wait until the page has loaded.
// Seems not to work unless everything is wrapped in this?
$( document ).ready(function() {

  // Create an empty array for the 9 tiles, a variable for the suit in play,
  // and a variable for the status of the game.
  var gameBoard = new Array(9);
  for (i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = '';
  }
  var playerSuit = 'crosses';
  var gameStatus = '';


  // Set off a function when a tile is clicked, this is where it all goes down.
  $( ".board-tile" ).click(function(){

    // Update DOM, show player selection
    $(this).addClass( "crosses" ).attr("disabled", "disabled").attr("name", "crosses");

    console.log($(this).attr("id"));

    var index = $(this).attr("id");
    var index = index[4];

    console.log(index);

    gameBoard[index] = 'crosses';


    // Update array from 'names' on #tiles




    // Check array for player win
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === ('crosses') ||
        gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] === ('crosses') ||
        gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] === ('crosses') ||
        gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] === ('crosses') ||
        gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === ('crosses') ||
        gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === ('crosses') ||
        gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] === ('crosses') ||
        gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] === ('crosses')) {
          $(".board-tile").attr("disabled", "disabled");
          $(".reset").removeClass("hidden");
          $(".main").text("Game Over");
          $(".sub").text("You win");
        }

    // Check array for stalemate
    else if ( !!gameBoard[0] === true &&
         !!gameBoard[1] === true &&
         !!gameBoard[2] === true &&
         !!gameBoard[3] === true &&
         !!gameBoard[4] === true &&
         !!gameBoard[5] === true &&
         !!gameBoard[6] === true &&
         !!gameBoard[7] === true &&
         !!gameBoard[8] === true) {
           $(".board-tile").attr("disabled", "disabled");
           $(".reset").removeClass("hidden");
           $(".main").text("Game Over");
           $(".sub").text("Nobody wins");
         }

     else {
     // Set up for computer's turn
     $(".board-tile").attr("disabled", "disabled");
     $(".main").text("Computer's turn");
     $(".sub").text("Hold tight");

     // Delay computer's move
     setTimeout(function(){

       // Computer randomly select tile




       function getAvailable(){
       var available = [];
       for (var i=0; i<9; i++){
         if (gameBoard[i] === ""){
           available.push(i);
         }
       }
       return available;
       }
       var availableTiles = getAvailable();
       //alert(availableTiles)

       var computerMove = "#tile" + availableTiles[[Math.floor(Math.random() * availableTiles.length)]];

         ($(computerMove)).addClass( "noughts" ).attr("disabled", "disabled").attr("name", "noughts");


       // Update array from 'names' on #tiles
       gameBoard[0] = $('#tile0').attr('name');
       gameBoard[1] = $('#tile1').attr('name');
       gameBoard[2] = $('#tile2').attr('name');
       gameBoard[3] = $('#tile3').attr('name');
       gameBoard[4] = $('#tile4').attr('name');
       gameBoard[5] = $('#tile5').attr('name');
       gameBoard[6] = $('#tile6').attr('name');
       gameBoard[7] = $('#tile7').attr('name');
       gameBoard[8] = $('#tile8').attr('name');

       // Check array for computer win
       if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === ('noughts') ||
           gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] === ('noughts') ||
           gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] === ('noughts') ||
           gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] === ('noughts') ||
           gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === ('noughts') ||
           gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === ('noughts') ||
           gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] === ('noughts') ||
           gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] === ('noughts')) {
             $(".board-tile").attr("disabled", "disabled");
             $(".reset").removeClass("hidden");
             $(".main").text("Game Over");
             $(".sub").text("You lose");
           }

       // Check array for stalemate
       else if ( !!gameBoard[0] === true &&
            !!gameBoard[1] === true &&
            !!gameBoard[2] === true &&
            !!gameBoard[3] === true &&
            !!gameBoard[4] === true &&
            !!gameBoard[5] === true &&
            !!gameBoard[6] === true &&
            !!gameBoard[7] === true &&
            !!gameBoard[8] === true) {
              $(".board-tile").attr("disabled", "disabled");
              $(".reset").removeClass("hidden");
              $(".main").text("Game Over");
              $(".sub").text("Nobody wins");
            }

       // Enable available tiles and update prompts
       else {
       $(".main").text("Your turn");
       $(".sub").text("Choose a tile");
       for (i = 0; i < 9; i++) {
         if ($('#tile' + i).attr('name') === ''){
           $('#tile' + i).removeAttr("disabled");
         }
       }
     }

     }, 500);
   }

  }); // End click function


// ------------------------------------------------------
// Functions

// Reset button
$( ".reset" ).click(function(){
  $(".board-tile").removeClass( "crosses" ).removeClass( "noughts" ).removeAttr("disabled").attr("name", "");
  $(this).addClass("hidden");
  $(".main").text("Your turn");
  $(".sub").text("Choose a tile");
});


}); // End document ready function
