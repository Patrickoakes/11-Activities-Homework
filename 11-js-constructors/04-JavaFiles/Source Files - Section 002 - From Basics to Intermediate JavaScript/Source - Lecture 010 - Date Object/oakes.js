
//CURRENT TIME/// EMPTY PARENTHESES
var date = new Date();

console.log(date)

//SET TIME///INPUT PARENTHESES
var date = new Date("January 20, 2020 10:14:00");

console.log(date)


///GET DATE OBJECT METHODS///

//getDate()  // Get the day as a number (1-31)
//getDay()   // Get the weekday as a number (0-6)
//// get  FullYear,  Hours,  Milliseconds,  Minutes,  Month,  Seconds.

///SET DATE OBJECT METHODS//

///WE CAN FIX IT TO ANY OF THE ABOVE//

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();

console.log(date);
console.log(year);
console.log(month);

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();

date.setFullYear(1990);
date.setMonth(11);

console.log(date);
console.log(year);
console.log(month);
/// ABOVE WILL GIVE YOU CURRENT AND WHATEVER SET YOU WANT

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();

console.log(date);
console.log(year);
console.log(month);

////////Below is milliseconds since Jan 1 , 1970

var month = date.getMonth();

var x = date.setFullYear(1990);

console.log(x);

