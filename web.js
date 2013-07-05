var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = null;

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  buf = new Buffer(data);
});

app.get('/', function(request, response) {
	var txt = buf === null ? "Index is not read" : buf.toString('utf-8');
    response.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});