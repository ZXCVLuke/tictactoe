// tictactoe.js

// Randomise choice of player or computer to go first.

// Players turn



// On click change button to disabled="disabled" and add .crosses

$( document ).ready(function() {

    $( "button" ).click(function(){
      $(this).addClass( "crosses" ).attr("disabled", "disabled");
    });

});

// Allow player to click on only one button on the gameboard.


// Check for win by checking to see if three buttons in a line have the same
// class of either .crosses or .noughts
// If .crosses player wins, end game and print You win, display reset button
// if .noughts computer wins, end game and print You lose, display reset button


// Check for stalemate by checking if all buttons are disabled but no wins
// If stalemate end game and print Stalemate, display reset button


// If no win or stalemate, change to Computers turn
// Randomise button selection from available buttons.
