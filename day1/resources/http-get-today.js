/*
* http-get-today.js
* In this example we see how to perform http(s) get requests
* using the standard http(s) library.
*/

var https = require('https');

var url = "https://history.muffinlabs.com/date";

// effettuo la chiamata
https.get(url, function(resp) {
  var data = "";

  // We receive the response data in a stream, so here
  // we specify what to do with each chunk we receive
  resp.on("data", function(chunk) {
    data += chunk;
	// concateniamo i dati ricevuti in una stringa
  });

  // We specify what to do when we finish receiving the
  // stream of data.
  resp.on("end", function() {
    // We receive the content as "text" and print it
    // console.log(data);

	var obj = JSON.parse(data);
	// console.log(data);
	console.log('Today: ' + obj.date + '\n');
	//
	const events = obj.data.Events;
	//
	// // stampa tutti gli eventi e i rispettivi testi
	// for (var i = 0; i < events.length; i++) {
	// stampa i primi 3 eventi e i rispettivi testi

	for (var i = 0; i < 3; i++) {
		console.log(events[i].year + ' -> ' + events[i].text + '\n');
	}
});

// in caso di errore
}).on("error", function(err) {
  console.log("Error: " + err.message);
});
