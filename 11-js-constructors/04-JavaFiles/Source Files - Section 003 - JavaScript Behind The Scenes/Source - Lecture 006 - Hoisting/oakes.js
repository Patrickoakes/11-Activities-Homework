/*var a = 10;

function b() {
    return 20;
}

console.log(a);
console.log(b());*/  ////ANSWER IS 10 and 20
///////////////////////////////////////////////////
/*console.log(a);
console.log(b());

var a = 10;          ///  UNDEFINED !!

function b() {
    return 20;    ////   20
}/////SURPRISINGLY ANSWER IS UNDEFINED AND 20  */




//The execution context is created
// and it has two stages creation and execution in creation stage global object.//

//The special keyword "THIS" and "scope chain" is created

//syntax parser goes to the code.

//And at this time javascript engine creates memory space for variables and functions.

//All of this happens before the engine actually starts in the code.

//So when javascript engine creates memory space for variables it assigns to all those 

//     ///              "VARIABLES" = "UNDEFINED"  as a default.             ///

//And remember that this happens always in creation's stage.

//As for the functions in creation stage the engine set ups memory space and for them nothing is changed.

//             "FUNCTIONS"  = "NO DEFAULT" don't get any temporary values in creations stage

// HOISTING ====== FIRST PHASE IS CREATION STAGE to set up the memory space for VARIABLES and FUNCTIONS

// EXECUTION ====== SECOND PHASE IS EXECUTION PHASE


/*console.log(a);
console.log(b());

var a = 10;

function b() {
    return 20;    ////   20
}

console.log(a);  */

///////////////ANSWER IS UNDEFINED, 20, 10

/*console.log(a);
console.log(b());

var a = 10;                  /////UNDEFINED

var b = function () {
    return 20;              //////ERROR////
}

console.log(a);*/



/*console.log(a);
console.log(b);            ////CHANGE (b())    to    b()  and////UNDEFINED

var a = 10;                  /////UNDEFINED

var b = function () {
    return 20;              /////UNDEFINED
}

console.log(a);              ///// 10
///Remember that it's always a better practice to invoke 
////functions and use variables after their declarations. */

/*if (true) {
    var a = 10;   ////10
} else {
    var b = 20;   ////Undefined
}

console.log(a);
console.log(b);*/

if (false) {
    var a = 10;   ///UNDEFINED
} else {
    var b = 20;  /////  20
}
console.log(a);
console.log(b);
