var express = require('express'),
    app = express(),
    text = 'Hello World.';

//Some Server configuration
app.use(express.bodyParser());

//Get latest movie
app.get('/', function(req, res) {
  res.send(text);
});

//Save a movie, set it to the latest
app.post('/', function(req, res) {
  text = req.body.message;
  res.send('Text set to "' + text + '"');
});

//Start the app
app.listen(2013);