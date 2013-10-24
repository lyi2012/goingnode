var express = require('express'),
    app = express(),
    latest = {
      title: 'Tremors',
      mpaa: 'PG-13',
      release: 1990
    };

//Some Server configuration
app.use(express.bodyParser());
app.set('view engine', 'ejs');

//Get latest movie
app.get('/', function(req, res) {
  res.render('index', latest);
});

//Set the cache to the provided movie
app.post('/', function(req, res) {
  latest = req.body;
  res.send(latest.title + ' saved.');
});

//Start the app
app.listen(2013);