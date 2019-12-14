/*var person1 = {};
person1.firstname = "John";
person1.lastname = "Smith";

var person2 = {};
person2.firstname = "Nick";
person2.lastname = "Doe";

//// above objects, but say we need to create many objects,  so we need function for volume, below.

function createPerson() {
  var newPerson = {};
  newPerson.firstname = "Bob";
  newPerson.lastname = "Brown";
  return newPerson;
}

var person3 = createPerson();

console.log(person1);
console.log(person2);
console.log(person3);

///RESULTS IN CONSOLE
/*{firstname: "John", lastname: "Smith"}
oakes.js:19 {firstname: "Nick", lastname: "Doe"}
oakes.js:20 {firstname: "Bob", lastname: "Brown"}*/

/////Better Yet BELOW/////

/* function createPerson(firstname, lastname) {
  var newPerson = {};
  newPerson.firstname = firstname;
  newPerson.lastname = lastname;
  return newPerson;
}

var person3 = createPerson("Bob", "Brown");
var person4 = createPerson("Mary", "James");


console.log(person3);
console.log(person4); */

//FUNCTION CONSTRUCTOR///

//The function constructor is used to create a function object.//

var person1 = {};
person1.firstname = "John";
person1.lastname = "Smith";

var person2 = {};
person2.firstname = "Nick";
person2.lastname = "Doe";

function Person(firstname, lastname) {
  //var this = {};  Compare 32
  this.firstname = firstname;
  this.lastname = lastname;
  //return this;   Compare 35
}

var person3 = new Person("Bob", "Brown");
var person4 = new Person("Mary", "James");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

/*BUILT IN FUNCTION CONSTRUCTORS
newObject();
newDate();
newArray();

Primitives can also have new string and new number objects
newString();
newNumber();*/

var strObj = new String("Hello");
console.log(strObj);
console.log(typeof strObj);

/*It looks like string but it's actually an object.

So the primitive string value is created as an object.

And because of that it's an object we are able to use multiple string methods like for example index

of which we have used previously.

But as I remember when we have used index of we did not transform string into object.

In that case went javascript engine found that primitive string value was followed by index of matter.

It automatically transforms string into object on the fly.*/
