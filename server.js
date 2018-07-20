"use strict";
var express = require("express");
var Twitter = require("node-twitter-api");
var app = express();

app.get('/', (req, res) => res.send('Hello Radfe!'))
app.listen(3001, () => console.log('Example app listening on port 3000!'))

// twitter keys/tokens
var twitter = new Twitter({
  consumerKey: 'JIG5TeMfMiHU2UFKzNMPdWO0l',
	consumerSecret: 'O7skIZT4Tj3X2yK407hr2OqMJAAtkznvkdAIK7xx9L8dtMbgyF',
	callback: "http://127.0.0.1:3000/success.html",
  access_token_key: '33181606-KDt5vALWaQIeihUavDp5QK6jMrw8RheztAb9y844J',
  access_token_secret: '8cP8cqYI5MzSreZfHesQyBdkWaT9ZxtBmgGwZNdi47GyD',
});

var _requestSecret;

app.get("/request-token", function(req, res) {
  twitter.getRequestToken(function(err,requestToken, requestSecret) {
    if(err)
      res.status(500).send(err);
    else {
      console.log("requested token: " + requestToken);
      _requestSecret = requestSecret;
      res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
    }
  })
});

// TODO: From here, it's usually a good idea to store the user somewhere for easy retrieval
// so the user doesn't have to sign in with Twitter every time he or she arrives at your site
// "persistent authentication"


app.get("/access-token", function(req, res) {
  var requestToken = req.query.oauth_token,
      verifier = req.query.oauth_verifier;

    twitter.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
        if (err)
            res.status(500).send(err);
        else
            twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
                if (err)
                    res.status(500).send(err);
                else {
                    console.log("values returned");
                    res.send(user);
                }
            });
    });
});
