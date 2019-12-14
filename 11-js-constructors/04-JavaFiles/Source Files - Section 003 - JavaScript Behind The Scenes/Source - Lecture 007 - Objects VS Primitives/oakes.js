////In case of PRIMITIVES variables copy the values.

//But in case of OBJECT variable D did not copy the value of that we'll see.

///It just became the reference for the existing object.

var a = 10;
var b = a;
a = 20;

console.log(a);   ///20
console.log(b);   ///10

var c = {
    name: 'John'
};
var d = c;

c.name = 'Nick';


//Object changes both from JOHN TO NICK IN BOTH 

c = {
    name: 'Bob'
};

///BUT in this C changed to 'Bob'
// and D stayed 'Nick'
/////  EQUAL SIGN CREATED NEW OBJECT THATS WHY C DIDNT CHANGE D