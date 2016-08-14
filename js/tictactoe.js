// tictactoe.js

var ttt = {
  gameBoard : new Array(9),
  playerSuit : 'x',
  computerSuit : 'o',
  gameStatus : '',

  // Update array with names (either "", "x", or "o") of each of the tiles
  updateGameBoard : function() {
      // todo - Make this into a forEach
      ttt.gameBoard[0] = $('#tile0').attr('name');
      ttt.gameBoard[1] = $('#tile1').attr('name');
      ttt.gameBoard[2] = $('#tile2').attr('name');
      ttt.gameBoard[3] = $('#tile3').attr('name');
      ttt.gameBoard[4] = $('#tile4').attr('name');
      ttt.gameBoard[5] = $('#tile5').attr('name');
      ttt.gameBoard[6] = $('#tile6').attr('name');
      ttt.gameBoard[7] = $('#tile7').attr('name');
      ttt.gameBoard[8] = $('#tile8').attr('name');
  },

  // Check for wins
  checkForWin : function(suit) {
    var g = ttt.gameBoard;
    if (g[0] === g[1] && g[1] === g[2] && g[0] === (suit) ||
        g[3] === g[4] && g[4] === g[5] && g[3] === (suit) ||
        g[6] === g[7] && g[7] === g[8] && g[6] === (suit) ||
        g[0] === g[3] && g[3] === g[6] && g[0] === (suit) ||
        g[1] === g[4] && g[4] === g[7] && g[1] === (suit) ||
        g[2] === g[5] && g[5] === g[8] && g[2] === (suit) ||
        g[0] === g[4] && g[4] === g[8] && g[0] === (suit) ||
        g[2] === g[4] && g[4] === g[6] && g[2] === (suit) ) {
          if (suit === ttt.playerSuit){
            ttt.gameStatus = 'playerwins';
          } else if (suit === ttt.computerSuit){
            ttt.gameStatus = 'computerwins';
          } else {};
        }
    else {}
  },

  // Check for stalemates
  checkForStalemate : function() {
    switch (ttt.gameStatus) {
      case 'playerwins':
        break
      case 'computerwins':
        break
      case '':
        var g = ttt.gameBoard;
        if ( !!g[0] === true &&
             !!g[1] === true &&
             !!g[2] === true &&
             !!g[3] === true &&
             !!g[4] === true &&
             !!g[5] === true &&
             !!g[6] === true &&
             !!g[7] === true &&
             !!g[8] === true) {
               ttt.gameStatus = "stalemate"; }
        else {}
    };
  },

  // Game status switch
  gameStatusCheck : function() {
  switch (ttt.gameStatus) {
    case 'playerwins':
      $(".board-tile").attr("disabled", "disabled");
      $(".reset").removeClass("hidden");
      $(".main").text("Game Over");
      $(".sub").text("You win");
      break
    case 'computerwins':
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
  }},

  // Set up for Computer's move
  setupForComputer : function () {
    $(".board-tile").attr("disabled", "disabled");
    $(".main").text("Computer's turn");
    $(".sub").text("Hold tight");
  },

  // Set up for Player's move
  setupForPlayer : function() {
    $(".main").text("Your turn");
    $(".sub").text("Choose a tile");
    for (i = 0; i < 9; i++) {
      if ($('#tile' + i).attr('name') === ''){
        $('#tile' + i).removeAttr("disabled");
  }}},

  computerMove : function() {
    var g = ttt.gameBoard;
    var cs = ttt.computerSuit;
    var ps = ttt.playerSuit;
    var computerMove;

    function getAvailable(){
      var available = [];
      for (var i=0; i<9; i++){
        if (!!ttt.gameBoard[i] === false){
          available.push(i);
        }}
      return available;
    }
    var availableTiles = getAvailable();
    // horizontals
    if (g[0] === g[1] && g[0] !== '' && $.inArray(2, availableTiles) !== -1 ) {
      computerMove = '#tile2';
    } else if (g[0] === g[2] && g[0] !== '' && $.inArray(1, availableTiles) !== -1 ) {
      computerMove = '#tile1';
    } else if (g[1] === g[2] && g[1] !== '' && $.inArray(0, availableTiles) !== -1 ) {
      computerMove = '#tile0';
    } else if (g[3] === g[4] && g[3] !== '' && $.inArray(5, availableTiles) !== -1 ) {
      computerMove = '#tile5';
    } else if (g[3] === g[5] && g[3] !== '' && $.inArray(4, availableTiles) !== -1 ) {
      computerMove = '#tile4';
    } else if (g[4] === g[5] && g[4] !== '' && $.inArray(3, availableTiles) !== -1 ) {
      computerMove = '#tile3';
    } else if (g[6] === g[7] && g[6] !== '' && $.inArray(8, availableTiles) !== -1 ) {
      computerMove = '#tile8';
    } else if (g[6] === g[8] && g[6] !== '' && $.inArray(7, availableTiles) !== -1 ) {
      computerMove = '#tile7';
    } else if (g[7] === g[8] && g[7] !== '' && $.inArray(6, availableTiles) !== -1 ) {
      computerMove = '#tile6';
    // verticals
    } else if (g[0] === g[3] && g[0] !== '' && $.inArray(6, availableTiles) !== -1 ) {
      computerMove = '#tile6';
    } else if (g[0] === g[6] && g[0] !== '' && $.inArray(3, availableTiles) !== -1 ) {
      computerMove = '#tile3';
    } else if (g[3] === g[6] && g[3] !== '' && $.inArray(0, availableTiles) !== -1 ) {
      computerMove = '#tile0';
    } else if (g[1] === g[4] && g[1] !== '' && $.inArray(7, availableTiles) !== -1 ) {
      computerMove = '#tile7';
    } else if (g[1] === g[7] && g[1] !== '' && $.inArray(4, availableTiles) !== -1 ) {
      computerMove = '#tile4';
    } else if (g[4] === g[7] && g[4] !== '' && $.inArray(1, availableTiles) !== -1 ) {
      computerMove = '#tile1';
    } else if (g[2] === g[5] && g[2] !== '' && $.inArray(8, availableTiles) !== -1 ) {
      computerMove = '#tile8';
    } else if (g[2] === g[8] && g[2] !== '' && $.inArray(5, availableTiles) !== -1 ) {
      computerMove = '#tile5';
    } else if (g[5] === g[8] && g[5] !== '' && $.inArray(2, availableTiles) !== -1 ) {
      computerMove = '#tile2';
    // diagonals
    } else if (g[0] === g[4] && g[0] !== '' && $.inArray(8, availableTiles) !== -1 ) {
      computerMove = '#tile8';
    } else if (g[0] === g[8] && g[0] !== '' && $.inArray(4, availableTiles) !== -1 ) {
      computerMove = '#tile4';
    } else if (g[4] === g[8] && g[4] !== '' && $.inArray(0, availableTiles) !== -1 ) {
      computerMove = '#tile0';
    } else if (g[2] === g[6] && g[2] !== '' && $.inArray(4, availableTiles) !== -1 ) {
      computerMove = '#tile4';
    } else if (g[2] === g[4] && g[2] !== '' && $.inArray(6, availableTiles) !== -1 ) {
      computerMove = '#tile6';
    } else if (g[4] === g[6] && g[4] !== '' && $.inArray(2, availableTiles) !== -1 ) {
      computerMove = '#tile2';
    // grab the middle tile first if available
    } else if ($.inArray(4, availableTiles) !== -1 ) {
      computerMove = '#tile4';
    // otherwise select a random tile
    } else {
      var computerMove = "#tile" + availableTiles[[Math.floor(Math.random() * availableTiles.length)]];
    }
    ($(computerMove)).addClass( ttt.computerSuit ).attr("disabled", "disabled").attr("name", ttt.computerSuit);
  }
}

$( document ).ready(function() {

  // Set the whole shebang off a players move.
  $( ".board-tile" ).click(function(){
    // Players turn
    $(this).addClass( ttt.playerSuit ).attr("disabled", "disabled").attr("name", ttt.playerSuit);
    ttt.updateGameBoard(); // Update array from 'names' on #tiles
    ttt.checkForWin(ttt.playerSuit); // Check array for player win
    ttt.checkForStalemate(); // Check array for stalemate
    ttt.gameStatusCheck(); // Finish game if win or stalemate
    if (ttt.gameStatus === ''){
      ttt.setupForComputer(); // Disable all tiles and update prompts
      // Computers turn
      setTimeout(function(){
        ttt.computerMove(); // Computer randomly select tile
        ttt.updateGameBoard(); // Update array from 'names' on #tiles
        ttt.checkForWin(ttt.computerSuit); // Check array for computer win
        ttt.checkForStalemate(); // Check array for stalemate
        ttt.gameStatusCheck(); // Finish game if win or stalemate
        if (ttt.gameStatus === '') {
          ttt.setupForPlayer(); // Enable available tiles and update prompts
        };
      }, 1000);
    };
  });

  // Reset button
  $( ".reset" ).click(function(){
    ttt.gameStatus = '';
    ttt.gameBoard = ['','','','','','','','',''];
    $(".board-tile").removeClass( "x" ).removeClass( "o" ).removeAttr("disabled").attr("name", "");
    $(this).addClass("hidden");
    $(".main").text("Your turn");
    $(".sub").text("Choose a tile");
  });

});
