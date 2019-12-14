/* GLOBAL EXECUTION COMPLEX

Global execution context is a base execution context,
tbat, manages the code which is not inside a function.
*/

var name = "John";

function a() {
  return "Hello";
}

var obj = {
  name: "Nick",
  b: function() {
    return "Hi";
  }
};
