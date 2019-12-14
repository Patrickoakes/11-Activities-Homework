
var colors = ['white', 'black', 'red'];

colors[1] = 'green';

console.log(colors);////  CHANGES OUT BLACK WITH GREEN/////


var colors = ['white', 'green', 'red'];

colors.push('blue');

console.log(colors); /////PUSH ADDS A COLOR TO END/////



var colors = ['white', 'green', 'red', 'blue'];

colors.pop();

console.log(colors);   /////POP SUBTRACTS A COLOR AT END/////



var colors = ['white', 'green', 'red'];

colors.shift();

console.log(colors);   /////SHIFT SUBTRACTS A COLOR AT BEGINNING/////



var colors = ['green', 'red'];

colors.unshift('purple');

console.log(colors);    /////UNSHIFT ADDS A COLOR AT BEGINNING/////



var colors = ['purple', 'green', 'red'];

console.log(colors.indexOf('red'));
/// indexOf('red') returns value of 2, because red is 2 in array   ////


var colors = ['purple', 'green', 'red'];

console.log(colors.indexOf('brown'));
////   VALUE RETURNS -1 WHEN THERE IS NO COLOR IN ARRAY IN indexOf//////



var colors = ['purple', 'green', 'red'];

if (colors.indexOf('blue') === -1) {

    colors.push('blue');

    console.log(colors);

    //// SINCE ABOVE WAS TRUE IN "IF" STATEMENT IT ADDED BLUE THEN DISPLAYED IT AT END OF ARRAY///
}