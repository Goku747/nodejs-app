var express = require('express');
var app = express();app.get('/', function (req, res) {
  res.send('This is my first nodejs app!');
});app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
module.exports = app;

// Kill after "x" milliseconds
//setTimeout(() => {
//  process.exit()
//}, 10000);
