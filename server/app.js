"use strict";

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Twitter = require('twitter');
const twitterConfigs = require('./config/config');
const client = new Twitter(twitterConfigs);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');		
});

io.on('connection', function(socket){
 	console.log('User Connected !');
		client.stream('statuses/filter',{track:'kendall'},function(stream){
			stream.on('data',function(tweet){
			console.log(tweet.text);
			socket.emit('mytweet',tweet);
			stream.on('error',function(error){
				console.log(error);
			});
		});

 	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// {
// 	consumer_key: 'LCA15Mn8xJeZtVCMrQxSFzZCJ',
//   	consumer_secret: 'xCgGISwHRM7WfGoewAlEurlo6zdJmiqinb6NUQ4mLTIx1RC8XR',
//  	access_token_key: '1843922168-jQCnVmptUsCRLWX207fjl6DHZbEwGhzpvK02RKu',
//   	access_token_secret: 'nscpVmRnqB0hUAsu5q4kaeDM6fx9kek3nkowgVjGmoet3'
// }