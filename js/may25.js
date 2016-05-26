
// Game board, moves stored in 3 arrays.

var a = ['x', 'o', 'x'];
var b = ['x', '', 'o'];
var c = ['x', 'x', 'o'];

// Winner, empty array to be filled

var winner = '';


// Look for efficiency. Don't run checks if you don't need to. ie. if there is
// a winner in the rows, don't check columns and diagonals.

// Check rows for winner

if (a[0] === a[1] && a[1] === a[2]) {
  var winner = a[0];
}

if (b[0] === b[1] && b[1] === b[2]) {
  var winner = b[0];
}

if (c[0] === c[1] && c[1] === c[2]) {
  var winner = c[0];
}

// Check columns for winner - can be done with a for statement!

if (a[0] === b[0] && b[0] === c[0]) {
  var winner = a[0];
}

if (a[1] === b[1] && b[1] === c[1]) {
  var winner = a[1];
}

if (a[2] === b[2] && b[2] === c[2]) {
  var winner = a[2];
}

// Check diagonals for winner

// This one should win
if (a[0] === b[1] && b[1] === c[2]) {
  var winner = a[0];
}

if (a[2] === b[1] && b[1] === c[0]) {
  var winner = a[2];
}

if (winner) {
  console.log("winner is " + winner);
} else if (a[0] && a[1] && a[2] && b[0] && b[1] && b[2] && c[0] && c[1] && c[2]) {
      console.log("stalemate")}
  else { console.log("next move");}
