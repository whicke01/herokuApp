// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
print("you are at 1");

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
