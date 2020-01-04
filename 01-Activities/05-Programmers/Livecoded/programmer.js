function Programmer(name = 'John', job, age, language) {
  // Typical ifelse statement
  // if (name) {
  //   this.name = name;
  // } else {
  //   this.name = 'John';
  // }
  // Ternary Operator
  // this.name = name ? name : 'John';
  this.job = job ? job : 'Programmer';
  this.age = age ? age : 25;
  this.language = language ? language : 'JavaScript';
  this.name = name;
  // this.job = job;
  // this.age = age;
  // this.language = language;

  this.printInfo = function() {
    console.log(
`${this.name} is a ${this.job}, who is ${this.age} years old.
Their favorite programming language is ${this.language}.`);
  }
}

var jake = new Programmer('Jake Smith', 'Java Developer', 46, 'Cobol');
var john = new Programmer(undefined, 'Team Lead', 72, 'Visual Basic');
var jimmy = new Programmer('Jimmy', null, 28, null);

jake.printInfo();
console.log('-----------------------------------------------------------')
john.printInfo();
console.log('-----------------------------------------------------------')
jimmy.printInfo();