//SCOPE and SCOPE CHAIN//
//  in programming language refers to the visibility or 
//  accessibility of variables and functions.

//In other words it tells you where in your program 
//you're allowed to use the variables and functions

/*var num1 = 5;

function a() {
    var num2 = 10;

    function b() {
        var num3 = 15;
        console.log(num3 + num2 + num1);
    }
    b();
}

a();*/////ANSWER IS 30    

/*var num1 = 5;

function a() {
    var num2 = 10;
    //   console.log(num3 + num2 + num1);  //ERROR BECAUSE OF SCOPE//
    function b() {
        var num3 = 15;

    }
    b();
}

a();*/ // SCOPE ERROR

/*var num1 = 5;

function a() {
    var num2 = 10;
    console.log(num2 + num1);
    function b() {
        var num3 = 15;

    }
    b();
}

a();  */ ////ANSWER IS 15 

/*var num1 = 5;
console.log(num2 + num1);///ERROR AGAIN BECAUSE OF SCOPE////

function a() {
    var num2 = 10;

    function b() {
        var num3 = 15;
    }
    b();
}

a();*/ ////  SCOPE ERROR

/*var num1 = 5;
console.log(num1);

function a() {
    var num2 = 10;

    function b() {
        var num3 = 15;
    }
    b();
}

a();*/  ///  SCOPE IS GLOBAL so 5

var num1 = 5;
console.log(num1);

function a() {
    var num1 = 10;
    console.log(num1);
    function b() {
        var num1 = 15;
        console.log(num1);
    }
    b();
}

a();

console.log(num1);//// ANSWER IS 5, 10, 15, and 5 again

var num1 = 5;

function a() {
    var num1 = 10;

    function b() {

        console.log(num1);
    }
    b();
}

a();/// ANSWER IS 10 because of next scope up COMMENT VAR NUM1= 10,  then goes to 5



