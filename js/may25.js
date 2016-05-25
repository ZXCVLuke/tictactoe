
// Game board, moves stored in 3 arrays.

var a = ['', 'x', 'x'];
var b = ['', 'o', 'o'];
var c = ['x', '', 'o'];

// Winner, empty array to be filled

var winner = '';

// Check rows for winner

if (a[0] === a[1] && a[1] === a[2]) {
  var winner = a[0];
} else {}

if (b[0] === b[1] && b[1] === b[2]) {
  var winner = b[0];
} else {}

if (c[0] === c[1] && c[1] === c[2]) {
  var winner = c[0];
} else {}

// Check columns for winner

if (a[0] === b[0] && b[0] === c[0]) {
  var winner = a[0];
} else {}

if (a[1] === b[1] && b[1] === c[1]) {
  var winner = a[1];
} else {}

if (a[2] === b[2] && b[2] === c[2]) {
  var winner = a[2];
} else {}

// Check diagonals for winner

// This one should win
if (a[0] === b[1] && b[1] === c[2]) {
  var winner = a[0];
} else {}

if (a[2] === b[1] && b[1] === c[0]) {
  var winner = a[2];
} else {}

if (winner) {
  console.log("winner is " + winner);
} else {
    if (a[0] && a[1] && a[2] && b[0] && b[1] && b[2] && c[0] && c[1] &&c[3]) {
      console.log("stalemate")}
      else {}
    }
}
