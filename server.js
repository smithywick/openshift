var express = require('express');
var path = require('path');
var app = express();
var location = "mock";

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, location)));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Listening on port: ' + port);
});
