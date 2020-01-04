var inquirer = require('inquirer');
var TV = require('./tv.js');

var tv = new TV();

inquirer.prompt([
  {
    type: 'list',
    choices: ['TV Show', 'TV Actor'],
    message: 'Would you like to search for a TV Show or Actor?',
    name: 'search',
    default: 'TV Show'
  },
  {
    type: 'input',
    message: 'Please enter the TV Show or Actor you would like to search for.',
    name: 'term',
    default: 'Andy Griffith'
  }
])
.then(function(response) {
  if (response.search === "TV Show") {
    console.log("Searching for TV Show");
    tv.findShow(response.term);
  } else {
    console.log("Searching for TV Actor");
    tv.findActor(response.term);
  }
})