var person = new Object();

console.log(person);// THIS IS CONSTRUCTIVE NOTATION
///  BOTH GIVE SAME RESULT///

var person = {};

console.log(person); //This is LITERAL NOTATION

// Literal NOtation with name string 'John'
var person = { firstname: 'John' };

console.log(person);

// Literal NOtation with name string 'John' and 'Smith
var person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27
};

console.log(person);


//CONSTRUCTIVE NOTATION
var person1 = new Object();

person1.firstname = 'Bob';
person1.lastname = 'Doe';

console.log(person1);

//recommends Literal notation

var person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27,
    daughter: {
        name: 'Mary',
        age: 5
    }
};

console.log(person);
console.log(person.daughter.name);


var person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27,
    daughter: {
        name: 'Mary',
        age: 5
    },
    myFunc: function () {

        console.log('Hello World');

    }
};

console.log(person);
console.log(person.daughter.name);

person.myFunc();
// above OBJECT within OBJECT

var person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27,
    daughter: {
        name: 'Mary',
        age: 5
    },
    myFunc: function (daughterName, fatherName, daughterAge) {

        console.log(daughterName + ' is a daughter of ' + fatherName + ' and she is ' + daughterAge +
            ' years old');

    }
};

console.log(person);
console.log(person.daughter.name);

person.myFunc(person.daughter.name, person.firstname, person.daughter.age);

//ABOVE IS PASS A FUNCTION INSIDE OBJECT////

var person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27,
    daughter: {
        name: 'Mary',
        age: 5
    },
    myFunc: function (par) {

        console.log(par.daughterName + ' is a daughter of ' + par.fatherName + ' and she is ' + par.daughterAge +
            ' years old');

    }
};

console.log(person);
console.log(person.daughter.name);

person.myFunc({
    daughterName: 'Jessy', fatherName: 'Michael',
    daughterAge: 5
});