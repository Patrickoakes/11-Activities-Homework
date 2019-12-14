/*var prof = "instructor"

if (prof === 'instructor') {

    console.log(prof + ' teaches students');

} else if (prof === 'doctor') {

    console.log(prof + ' treats people');

} else if (prof === 'composer') {

    console.log(prof + ' creates the music');

} else {

    console.log('Professions do not match');

}

/// ANSWER = instructor teaches students///


// Change prof to 'doctor' and ANSWER changes and so on.
var prof = "doctor"

if (prof === 'instructor') {

    console.log(prof + ' teaches students');

} else if (prof === 'doctor') {

    console.log(prof + ' treats people');

} else if (prof === 'composer') {

    console.log(prof + ' creates the music');

} else {

    console.log('Professions do not match');

}*/

////ANSWER =  doctor treats people

/////BUT IF////////  change ELSE IF BOTH to doctor///

var prof = "doctor"

if (prof === 'instructor') {

    console.log(prof + ' teaches students');

} else if (prof === 'doctor') {

    console.log(prof + ' treats people');

} else if (prof === 'doctor') {

    console.log(prof + ' creates the music');

} else {

    console.log('Professions do not match');

}

//// ONLY GET  'doctor treats people' because when JAVASCRIPT gets 
/// True Statement it terminates the search.

/////LOGICAL OPERATORS/////JAVASCRIPT
/*  1. AND  which is equal to   &&
    2.  OR  which is equal to   ||
    3. NOT  which is equal to   !     */

if (5 === 5 && 4 === 4) {

    console.log('Condition is true');

} else {

    console.log('Condition is false');

}

/////CONDITION IS TRUE//// BUT FALSE    if(5 === 4 && 4 === 4) 
///SO WE NEED OR

if (5 === 4 || 4 === 4) {

    console.log('Condition is true');

} else {

    console.log('Condition is false');

}
/////CONDTION IS TRUE

if (!true) {

    console.log('Condition is true');

} else {

    console.log('Condition is false');

}
//// Because  ! = NOT in JAVASCRIPT   so   NOT TRUE = false///