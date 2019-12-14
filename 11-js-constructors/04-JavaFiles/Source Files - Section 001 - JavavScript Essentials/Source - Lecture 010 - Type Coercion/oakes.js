/*var a = 10 + 5;

console.log(a);
// 15 is obvious answer

var a = 10 + '5';

console.log(a);
// 105 not so obvious answer// concatenate//
// This is TYPE COERCION it has made 10 into a STRING. So answer is 105

var a = 10 * 5;

console.log(a)*/
/// TYPE COERCION this time made 10 a NUMBER. So answer is 50

var b = 'Hello ' + 'dear ' + 'student';

console.log(b)
/// obvious STRING///

var a = 5 + 10 + 'b';

console.log(a);
/// answer is    15b   //// reads left to right

var c = 'b' + 5 + 10;

console.log(c)
//// answer is    b510     everything became STRING!!!////// reads left to right

5 === 5
/// ANSWER IS TRUE////

5 === 5 === 5
/// ANSWER IS FALSE!  Because  5 === 5 is FALSE/// So  TRUE === 5 is FALSE  // Left to right

true == 1
// ANSWER is TRUE /// Because not ZERO

false == 0
/// Answer is TRUE///

// USE === To AVOID this //////
