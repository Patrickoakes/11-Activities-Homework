/* We have already talked about that almost everything is an object in Javascript.

So what does it mean when we say almost you know that there are two types of data in javascript primitives

like strings numbers booleans undefined and now and none primitives like arrays functions objects dates

and etc..

So when we say that everything is an object in Javascript it means that everything except primitive

data is an object.*/

/*var arr = [1, 2, 3];
arr[3] = 4;

arr.prop = 'Hello';

console.log(arr);*/

/*Now let's move on and talk about functions.

functions like arrays are objects.

You can attach to it as a property a primitive, objects or another function.

Well the main difference between functions and object is that functions are invocable in order to execute

the code we need to call them.*/

function a() {
    console.log('Hello');
}

a['prop'] = 'Hi';

a.obj = {
    greet: 'Hey'
};

a.myFunc = function () {
    console.log('Hola');
}
