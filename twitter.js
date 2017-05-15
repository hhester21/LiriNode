
var Twitter = require('twitter');



console.log('this is loaded');
var keys = require("./keys.js");

var client = new Twitter({
  consumer_key: 'IInrT1QKUPq9M2cMozPjyji0v',
  consumer_secret: 'vrAh7rwCV4YhOwxYCExwlvUiOoHqvSX1qvczKvMDzxsWTEjoi1',
  access_token_key: '44522264-PAdpJzL058hBwuVpOwalPkOmQpQ9R5rtvEFvI8y19',
  access_token_secret: 'bi2rylgDxUo1caco4uCfb94uT23YV4ZOM9OKvYn29vQyI'
});


//console.log(keys);
 
var params = {screen_name: 'kkoshinski', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  console.log("hello?");
  if (!error) {
    console.log(tweets[0].created_at);
    console.log(tweets[0].user.name);
  }
});





//console.log ()


// client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweet);  // Tweet body. 
//   console.log(response);  // Raw response object. 
// });









// console.log('this is loaded');

// exports.twitterKeys = {
//   consumer_key: '<IInrT1QKUPq9M2cMozPjyji0v>',
//   consumer_secret: '<vrAh7rwCV4YhOwxYCExwlvUiOoHqvSX1qvczKvMDzxsWTEjoi1>',
//   access_token_key: '<44522264-PAdpJzL058hBwuVpOwalPkOmQpQ9R5rtvEFvI8y19>',
//   access_token_secret: '<bi2rylgDxUo1caco4uCfb94uT23YV4ZOM9OKvYn29vQyI>',

// }



// var Twitter = require('twitter');




 
// // var client = new Twitter({
// //   consumer_key: '',
// //   consumer_secret: '',
// //   access_token_key: '',
// //   access_token_secret: ''

 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });