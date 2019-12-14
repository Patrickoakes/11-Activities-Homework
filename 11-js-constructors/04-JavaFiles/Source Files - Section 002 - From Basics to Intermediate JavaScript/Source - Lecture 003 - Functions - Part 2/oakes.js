///STATEMENTS VS EXPRESSIONS///

// 1. Statements are instructions to be executed by
// the web browser; NO IMMEDIATE VALUE

// 2. EXPRESSIONS have IMMEDIATE VALUE.


/* This is a STATEMENT.
 if (condition) {

    //code block

}
// NO IMMEDIATE VALUE */



//THIS IS a EXPRESSION
a = 5 + 5

console.log(a);
// IMMEDIATE VALUE

console.log(10 === a);
/// EXPRESSION IS TRUE!!! IMMEDIATE VALUE BOOLEAN


/// FUNCTION STATEMENT
function add(a, b) {

    console.log(a + b);

}

////  must CALL it with ARGUMENT
add(5, 10);

///// FUNCTION EXPRESSION 
// a and b are ANONYMOUS because no name
var sum = function (a, b) {

    console.log(a + b);

}

sum(10, 15);

//////////BIG DIFFERENCE BETWEEN FUNCTION EXPRESSION AND STATEMENT//

//you CAN put ARGUMENT before STATEMENT and it will still work

//you CAN'T put ARGUMENT before EXPRESSION it won't work.




