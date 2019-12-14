var arr = ['John', 'Nick', 'Bob', 'Michael', 'Mary'];

/*console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);*/

//// SLOW WAY

for (var i = 0; i < 5; i++) {

    console.log(arr[i]);

}

console.log(arr);



for (var i = 0; i < 5; i++) {

    if (arr[i] === 'Bob') {

        console.log(arr[i] + ' is my brother');

    }
    console.log(arr[i]);
}

for (var i = 0; i < 5; i++) {

    if (arr[i] === 'Bob') {

        console.log(arr[i] + ' is my brother');
        break;
    }
    console.log(arr[i]);
}

///  break;// STOP WHEN TRUE

for (var i = 0; i < 5; i++) {

    if (arr[i] === 'Bob') {

        console.log(arr[i] + ' is my brother');
        continue;
    }
    console.log(arr[i]);
} ////NO 'BOB' with CONTINUE only statement Jumps over next item///
