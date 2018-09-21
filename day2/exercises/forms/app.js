/*
* app.js
* Main entry point of the forms project
* This script shows how to create a server
* that can handle request from web forms
*/
// Load the module
var bodyParser = require('body-parser');
var express = require('express');
var app  = express();

// Loading utils to inspect the content of js objects
var util = require('util');

var port = 3000;

// Mount body-parser middleware, and instruct it to
// process form url-encoded data
app.use(bodyParser.urlencoded());
app.use('/', express.static('public'));

var people = [{ name : "Mario Ferrari", email : "fake@news.it"},
              { name : "Carlo Smith",   email : "youreach@menot.it"},
              { name : "Fabio Ferrari", email : "email@email.com"}];

// Handling GET requests

// http://localhost:3000/search.html
app.get('/search', function(req, res){

  myinspect(req.headers);
  myinspect(req.url);
  myinspect(req.query);

  // bodyparser permette di avere un oggetto
  // e comunque in generale è più pulito
  // NOTE: non utilizzo la funzione
  console.log(req.body);

  // manda html
  // proprio brutto
  res.status(200)
	.send('These are the items found!');
});

// http://localhost:3000/subscribe.html
app.post('/subscribe', function(req, res) {

  myinspect(req.headers)
  // Non ci sono i parametri nell'url quindi restituirà un oggetto vuoto
  myinspect(req.params)

  res.status(201)
  	 .send('You are now subscribed!');
});

app.listen(port, function() {
  console.log('Server running on port', port);
});

function myinspect (obj) {
	// inspect ci permette di vedere le proprietà di un oggetto
	console.log(util.inspect(obj, {showHidden: true, depth: null}));
}
