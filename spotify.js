var spotify = require('spotify');


function SearchSong(songname) {
  spotify.search({ type: 'track', query: songname }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }

      // Do something with 'data'

  console.log(data.tracks.items);

  });
}
// This is our last statement in input in console
//so you node movieDB.js 'NameofThemovie'
//example node movieDB.js Titamic
const userInput = process.argv[2];
console.log(process.argv)
console.log(userInput);

SearchSong(userInput)
