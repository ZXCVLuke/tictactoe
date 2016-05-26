// tictactoe.js

// Randomise choice of player or computer to go first.

$( document ).ready(function() {

  // create an empty array of 9 elements for the 9 IDs.
  var gameBoard = new Array(9);

  $( ".board-tile" ).click(function(){

    // On click change button to disabled="disabled" and add .crosses and name="crosses"
    $(this).addClass( "crosses" ).attr("disabled", "disabled").attr("name", "crosses");

    // check each id (ie. a0) for name of .noughts or .crosses
    gameBoard[0] = $('#a0').attr('name');
    gameBoard[1] = $('#a1').attr('name');
    gameBoard[2] = $('#a2').attr('name');
    gameBoard[3] = $('#b0').attr('name');
    gameBoard[4] = $('#b1').attr('name');
    gameBoard[5] = $('#b2').attr('name');
    gameBoard[6] = $('#c0').attr('name');
    gameBoard[7] = $('#c1').attr('name');
    gameBoard[8] = $('#c2').attr('name');

    // Check for win
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] === "crosses" ||
        gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] === "crosses" ||
        gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] === "crosses" ||
        gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] === "crosses" ||
        gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] === "crosses" ||
        gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] === "crosses" ||
        gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] === "crosses" ||
        gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] === "crosses") {
      $(".board-tile").attr("disabled", "disabled");
      $(".main").text("Game Over");
      $(".sub").text("You win");
      $(".reset").removeClass("hidden");
    }

    // Check for stalemate
    else if (!!gameBoard[0] === true &&
             !!gameBoard[1] === true &&
             !!gameBoard[2] === true &&
             !!gameBoard[3] === true &&
             !!gameBoard[4] === true &&
             !!gameBoard[5] === true &&
             !!gameBoard[6] === true &&
             !!gameBoard[7] === true &&
             !!gameBoard[8] === true) {
           $(".main").text("Game Over");
           $(".sub").text("Stalemate, nobody wins");
           $(".reset").removeClass("hidden");
         }

    else {
      $(".board-tile").attr("disabled", "disabled");
      $(".main").text("Computer's turn");
      $(".sub").text("Hold tight");

      // Randomly select tile, change class and name



      // Check for win

      // Check for stalemate

      // Remove disabled attribute from buttons without names
    }

  }); // End move click function

// Reset button
    $( ".reset" ).click(function(){
      $(".board-tile").removeClass( "crosses" ).removeAttr("disabled").removeAttr("name");
      $(this).addClass("hidden");
      $(".main").text("Your turn");
      $(".sub").text("Choose a tile");
    });

});
