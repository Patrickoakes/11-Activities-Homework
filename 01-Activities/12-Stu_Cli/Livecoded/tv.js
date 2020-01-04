var axios = require('axios');
var fs = require('fs');

var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    axios.get(URL)
      .then(function ({ data }) {
        var resultString = `
-------------------------------------------------
Show: ${data.name}
Genre(s): ${data.genres.join(', ')}
Rating: ${data.rating.average}
Network: ${data.network.name}
Summary: ${data.summary}`;
        fs.appendFile('log.txt', resultString, function (err) {
          if (err) {
            console.log(err);
          }
        })
        console.log(resultString);
      })
      .catch(function (err) {
        console.log(err);
      })
  };
  this.findActor = function (name) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/search/people?q=" + name;
    axios.get(URL)
      .then(function ({ data }) {
        data.forEach(function (person) {
          var resultString = `
-------------------------------------------------
Name: ${person.person.name || 'Not Found'}
Birthday: ${person.person.birthday || 'Not Found'}
Score: ${person.score || 'Not Found'}
Country: ${person.person.country ? person.person.country.name : 'Not Found'}`;
          fs.appendFile('log.txt', resultString, function (err) {
            if (err) {
              console.log(err);
            }
          })
          console.log(resultString);
        })
      })
      .catch(function (err) {
        console.log(err);
      })
  };
};

module.exports = TV;
