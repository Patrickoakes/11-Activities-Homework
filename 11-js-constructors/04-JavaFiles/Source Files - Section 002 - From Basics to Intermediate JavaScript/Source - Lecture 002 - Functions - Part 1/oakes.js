/*function funName(par) {

    console.log('Hello World!');

}
///Need to "CALL" function
funName();*/


function passExam(name, score) {

    var passUni = 71;

    var passColl = 51;

    if (score >= passUni) {

        console.log(name + ' has enrolled in University with ' +
            score + ' points');

    } else if (score >= passColl) {

        console.log(name + ' has enrolled in College with ' +
            score + ' points');

    } else {

        console.log(name + ' has failed');


    }

}
/// can add function within function LOOK AT JOHN/////
function calcScore(quizScore, essayScore) {

    var score = quizScore + essayScore;

    return score;

}

////
///Need to "CALL" function
passExam('John', calcScore(40, 35));
////  ANSWER ==  John has enrolled in University with 75 points
passExam('Mary', 65)
////  ANSWER ==  Mary has enrolled in College with 65 points
passExam('Bob', 45);
///// ANSWER ==   Bob has failed

/// (name, score)  act like variables and called PARAMETERS.
/// ('John', 75);  call real name and score it becomes ARGUMENTS.

