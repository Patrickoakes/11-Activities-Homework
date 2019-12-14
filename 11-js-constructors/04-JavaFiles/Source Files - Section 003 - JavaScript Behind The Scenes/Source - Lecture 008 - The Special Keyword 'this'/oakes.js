////global execution context is created and it creates a global window object.

//And "THIS" and on a global level this completely equals two window object when we use this keyword inside

//regular function in regular I mean usual function which is not a method created inside an object.

///And then we invoke this function local execution context is created.


////   It defines "THIS" which still refers to a global window object and in CONSOLE we get window object.


/*function a() {
    console.log(this);
    console.log(this === window);

    function b() {
        console.log(this);
        console.log(this === window);
    }

    b();
}


a();*/   //WINDOW TRUE AND WINDOW TRUE


///"THIS"  keyword always refers to global window object 
//and acts like in global execution context.

/*var per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullname: function () {
        return per.firstname + ' ' + per.lastname;
    }
}


console.log(per.getFullname());*/  ////JOHN SMITH


/*var per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullname: function () {
        console.log(this === per)  /////TRUE////
        return per.firstname + ' ' + per.lastname;
    }
}


console.log(per.getFullname());///JOHN AND SMITH

////TRUE and JOHN SMITH*/

/*var per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullname: function () {
        console.log(this === per)
        return this.firstname + ' ' + this.lastname;
    }
}


console.log(per.getFullname());
///TRUE and JOHN SMITH/////   SAME */////


/*var per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullname: function () {
        console.log(this === per)
        console.log(this.firstname + ' ' + this.lastname);

        function greet() {
            console.log('Hi ' + this.firstname)
        }
        greet();
    }



per.getFullname(); */  /////True,  JOHN SMITH,  Hi undefined

//We got hi undefined "THIS" key word insert function Great couldn't exist on the property.

//First thing there isn't is that people who created javascript decided that "THIS" 

//keyword inside their regular function to refer to global object.


/*var firstname = 'Bob';

var per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullname: function () {
        var that = this;
        console.log(this === per)
        console.log(this.firstname + ' ' + this.lastname);

        function greet() {
            console.log('Hi ' + this.firstname)
        }
        greet();
    }
}


per.getFullname();

////TRUE,  John Smith,   Hi Bob  ///  GLOBAL SCOPE*/

/*var firstname = 'Bob';

var per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullname: function () {
        var that = this;    /// created var that = this
        console.log(this.firstname + ' ' + this.lastname);

        function greet() {
            console.log('Hi ' + that.firstname) /// changed this into that// WHEW!!
        }
        greet();
    }
}


per.getFullname();   /////   got rid of BOOLEAN,   John Smith,  Hi John */


var firstname = 'Bob';

var per = {
    firstname: 'John',
    lastname: 'Smith',
    getFullname: function () {
        var that = this;
        console.log(this.firstname + ' ' + this.lastname);

        function greet() {
            console.log('Hi ' + that.firstname)
        }
        greet();
    }
};
//////BELOW IS NEW ///////
var per1 = {
    firstname: 'Nick',
    lastname: 'Doe',
};

per1.getFullname = per.getFullname;  /// THIS ALLOWS US TO ADD NEW PERSON AND GET SAME INFO

per.getFullname();
per1.getFullname();