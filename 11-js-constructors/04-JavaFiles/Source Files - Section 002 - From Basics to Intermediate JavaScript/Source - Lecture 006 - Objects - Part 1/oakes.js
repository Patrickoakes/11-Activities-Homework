//OBJECTS-VERY IMPORTANT///

//  OBJECTS are collections of VARIABLES and FUNCTIONS, which are represented as name/value pairs.

// ALMOST EVERYTHING IN JAVASCRIPT IS AN OBJECT//
/* OBJECT
1. Properties
2. Methods

////PROPERTIES CAN BE PRIMITIVES, ARRAYS, AND OBJECTS THEMSELVES//

////METHODS are FUNCTIONS passed inside an OBJECT in order to perform a specific task.

///EXAMPLES

PERSON like OBJECT has

PROPERTIES                             METHODS

1. person.firstName = 'John'            1. person.speak()
2. person.lastName = 'Doe'              2. person.run()
3. person.age = 27                      3. person.work()
4. person.prof = 'instructor'           4. person.sing()
5. person.weight = 180                  5. person.read() */

/*var person = new Object()

person.firstname = 'John';

console.log(person);


// CONSOLE gives us {} becasue they always represent an object

var person = new Object()

person.firstname = 'John';  //  a dot or period is also an OPERATOR like ARITHMETIC SYMBOL

person['lastname'] = 'Smith'; // []  are also an OPERATOR listed on the precedence table.

console.log(person);
/////////////

console.log(person.firstname);   // PREFERRED WITH CONSTUCTIVE IS DOT

console.log(person['lastname'])   //SECOND WAY IS WITH BRACKETS AND STRING
//////////////
var person = new Object()

var job = 'profession'; /// ADD Profession as variable

var name = 'firstname';//// ADDED THIS VARIABLE

person.name = 'John'; // Changed First name into NAME//

//person.name = 'Bob';///  ACTIVATE THIS LAST IT CHANGES NAME DYNAMICALLY

person['lastname'] = 'Smith';

person[job] = 'instructor';  /// added variable to brackests with new

console.log(person);  ///added property to person 'instructor'

console.log(person.firstname);

console.log(person['lastname'])

/
/////NEW CODE//////*/

var person = new Object();

person.firstname = 'John';

person.lastname = 'Smith';

person.son = new Object();

person.son.name = 'Nick';

person.son.age = 5;

console.log(person);


