/*
* app.js
* Main entry point of the mid-static project
* This script shows how to create a server
* servig static files using app.use middleware feature
*/
var express = require('express');
var app = express();

var port = 3000;

// aggiungiamo un middleware per fornire pagine staticamente
// app.use('/', express.static('public'));
// http://localhost:3000/image1.jpg
app.use('/static', express.static('public'));
// http://localhost:3000/static/image1.jpg

// Handling GET requests
app.get('/hello', function(req, res){
  res.send('Hello World!');
});

app.listen(port, function() {
  console.log('Server running on port', port);
});
