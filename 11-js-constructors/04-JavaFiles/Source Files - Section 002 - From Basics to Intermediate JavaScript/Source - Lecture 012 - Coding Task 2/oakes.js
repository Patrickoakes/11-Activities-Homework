/*
**********************CODING TASK No 2*****************************
1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2,
    with the following values:
    a. John, 47, 46
    b. Bob, 23, 24
    c. Nick, 40, 35
    d. Alex, 44, 45*/
////CORRECT//////////
var studentA = {      // var students = [
    name: 'John',     //  {
    score1: 47,       // name: 'John',
    score2: 46        // score1: 47,
    // score2: 46
};                    //  },

var studentB = {
    name: 'Bob',      //  name: 'Bob',    
    score1: 23,       //  score1: 23,
    score2: 24        //  score2: 24
};                    //  },

var studentC = {
    name: 'Nick',     //  name: 'Nick',
    score1: 40,       //  score1: 40,
    score2: 35        //  score2: 35
};                    //  },

var studentD = {
    name: 'Alex',     //  name: 'Alex',
    score1: 44,       //  score1: 44,
    score2: 45        //  score2: 45
};                    // }
// ];
//2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
//    to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees

var students = [studentA, studentB, studentC, studentD];

console.log(students)
//CORRECT BELOW////////////////////
//var scores = [91, 81, 71, 61, 51];

//var degrees = ['A', 'B', 'C', 'D', 'E'];

//3. Create function which will calculate total score (score1 + score2) for each student.
/////CLOSE TO CORRECT/////////
function calcScore(score1, score2) {

    var score = score1 + score2;

    return score;
}
console.log(score);

//4. //Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student
// has passed an exam and what kind of degree he has got.
//CORRECT/////////////
function nameGrade(name, score) {       // function calcFinal() {

    nameGrade('John', calcScore(47, 46));  // for (var i = 0; i < students.length; i++) {

    nameGrade('Bob', calcScore(23, 24));   // students[i].sum = calcSum(students[i].score1,
    //  students[i].score2);
    nameGrade('Nick', calcScore(40, 35));

    nameGrade('Alex', calcScore(44, 45));  //if (students[i].sum >= 51) {

}; // console.log(students[i].name + ' passed final exam successfully');

/*for (var x = 0; x < scores.length; x++) {

    if (students[i].sum >= scores[x]) {

        console.log('He has ' + students[i].sum + ' points and he got diploma with degree ' + degrees[x]);

        console.log('---------');

        break;
    }

}
} else {


console.log(students[i].name + ' got ' + students[i].sum + ' points, has failed and has to try next year');
console.log('---------');
}

}

}

calcFinal();
/*
//console.log('-------------------');

for (var i = 100; i < 105; i++) {

for (var x = 0; x < 10; x++) {

console.log(x);

}
console.log(i);
}*/






























