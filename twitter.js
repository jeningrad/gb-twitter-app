// Successful server-side fetch for twitter stream but unable to get past preflight/CORS-disabled browser issue to render client-sde

var Twitter = require('twitter');
var OAuth = require('oauth');

// TODO: hide these keys under environment variables later
var twitter = new Twitter({
  consumer_key: 'JIG5TeMfMiHU2UFKzNMPdWO0l',
  consumer_secret: 'O7skIZT4Tj3X2yK407hr2OqMJAAtkznvkdAIK7xx9L8dtMbgyF',
  access_token_key: '33181606-KDt5vALWaQIeihUavDp5QK6jMrw8RheztAb9y844J',
  access_token_secret: '8cP8cqYI5MzSreZfHesQyBdkWaT9ZxtBmgGwZNdi47GyD',
})

var count = 0;
  // util = require('util');

// var api_url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';

// twitter.stream('statuses/filter', {track: 'girlboss'}, function(error, tweets, response) {
//   if (!error) {
//     stream.on('data', function(data){
//       console.log(data);
//       stream.destroy();
//       process.exit(0);
//     });
//   }
// });

twitter.stream('statuses/filter', {track: 'girlboss'}, function(stream) {
  stream.on('data', function(data){
    console.log(data);
    stream.destroy();
    process.exit(0);
  });
});
