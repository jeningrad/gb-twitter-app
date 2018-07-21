"use strict";
const express = require("express");
const Twitter = require("node-twitter-api");
const app = express();
require('dotenv').config();
app.listen(3001);

// twitter keys/tokens
const twitter = new Twitter({
  consumerKey: process.env.CONSUMERKEY,
	consumerSecret: process.env.CONSUMERSECRET,
	callback: "http://127.0.0.1:3000/"
});

// CORS fix
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// request oauth token
var _requestSecret;
app.get("/request-token", function(req, res) {
  twitter.getRequestToken(function(err,requestToken, requestSecret) {
    if(err) {
    console.log("request token error");
      res.status(500).send(err);
    } else {
      console.log("requested token: " + requestToken);
      _requestSecret = requestSecret;
      res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
    }
  })
});

// receive token + verifier
app.get("/access-token", function(req, res) {
  const requestToken = req.query.oauth_token,
        verifier = req.query.oauth_verifier;

    twitter.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
      if (err) {
        console.error('access token error')
        res.status(500).send(err);
      }
      else
        twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
          if (err) {
            console.error('verify user error')
            res.status(500).send(err);
            }
          else {
            console.log("values returned", user);
            res.send(user);
          }
        });
    });
});
