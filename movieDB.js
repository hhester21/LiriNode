// here we declare our movie DB API function
const MovieDB = require('moviedb')('65df1022a70a9ad63fbfa028ad61d139');

// MoviDB is an OBJECT
// searchMovie is a Key! that is a function!
// Here we need to figure out how can we manualy put  query in JS!
//Takin text value from user after he typrs it!
function SearchMovie(moviename) {
	MovieDB.searchMovie({
		query: moviename
	}, (err, res) => {
		// err is an error
		// if script has an error
		//it will return an error
		if(err){
			console.log(err)
		}
		//res is the resault from API
		//and it is indeed is an Obkect
		console.log(res.results[0]);
	})
}
// This is our last statement in input in console
//so you node movieDB.js 'NameofThemovie'
//example node movieDB.js Titamic
const userInput = process.argv[2];
console.log(process.argv)
console.log(userInput);

SearchMovie(userInput)



// now since we have a functiob that takes movie as a string....how we can create input in terminal
//for node js!
