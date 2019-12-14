var person1 = {};
person1.firstname = 'John';
person1.lastname = 'Smith';

var person2 = {};
person2.firstname = 'Nick';
person2.lastname = 'Doe';

function createPerson() {
    var newPerson = {};
    newPerson.firstname = 'Bob';
    newPerson.lastname = 'Brown';
    return newPerson;

}

var person3 = createPerson();

console.log(person1);
console.log(person2);
console.log(person3);