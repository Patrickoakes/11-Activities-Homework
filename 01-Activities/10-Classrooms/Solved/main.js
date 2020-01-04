// requiring our Classroom module exported from classroom.js
var Classroom = require("./Classroom.js");

// creating and storing a new classroom object
var firstClass = new Classroom("TJ", 630946344);

// calling the addStudent method on our firstClass object
firstClass.addStudent("McLovin'", "Cooking", 2.5);
firstClass.addStudent("John Hancock", "Penmanship", 4.27);
var a = new Student('a', 'b', 1)
console.log(firstClass);

console.log(firstClass.studentCount());