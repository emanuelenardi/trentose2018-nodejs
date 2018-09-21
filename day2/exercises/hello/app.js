/*
* app.js
* Main entry point of the hello project
* This script starts a simply hello world server
*/

var express = require('express');
var app = express();

// https://stackoverflow.com/questions/35926274/what-is-the-use-of-var-app-express-in-the-process-of-creating-a-node-js-app
// you could for example want to have several web applications listening on different ports
var port = 3000;

// Handling GET requests
app.get('/', function(req, res){
  res.send('Hello World!');
});

app.listen(port, function() {
  console.log('Server running on port', port);
});
