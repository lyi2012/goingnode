var mongoose = require('mongoose'),
    db = mongoose.connection;

//Listen to some database connection events
db.on('error', console.error);
db.once('open', function() {
  console.log('Database Connected.');
});

//Connect to the database
mongoose.connect('mongodb://user:pass@mongo.onmodulus.net:27017/quZyby4w');

//Create the movie schema
var movieSchema = new mongoose.Schema({
  title: { type: String },
  mpaa: String,
  release: Number
});

//Movie database object
var Movie = mongoose.model('Movie', movieSchema);

//Create a movie object
var tremors = new Movie({
  title: 'Tremors',
  mpaa: 'PG-13',
  release: '1990'
});

//Save and find the movie
tremors.save(function(err, movie) {
  if (err) return console.error(err);
  console.log(movie);

  Movie.find({title:'Tremors'}, function(err, movies) {
    if (err) return console.error(err);
    console.log(movies);
  });
});
