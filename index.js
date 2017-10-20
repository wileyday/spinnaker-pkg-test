var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Spinnaker! Version 3');
});

app.get('/healthcheck', function (req, res) {
  res.send('checking health... OK!');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
