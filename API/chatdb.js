module.exports = ChatDb;

var ChatDb = function () {
    var mongoose = require('mongoose');
	var db = mongoose.connection;

	db.on('error', console.error);
	db.once('open', function() {
		console.log('Database Connected.');
	});
	
	mongoose.connect('mongodb://root:nodeday@mongo.onmodulus.net:27017/tyt9Iwas');
	
	var userSchema = new mongoose.Schema({
	  user_id: String,
	  password: String,
	  date_created: Date
	});

	var msgSchema = new mongoose.Schema({
	  user_id: String,
	  timestamp: Date,
	  message: String,
	  blob: String
	});
	
	var User = mongoose.model('User', userSchema);
	var Msg = mongoose.model('Message', msgSchema);
};

ChatDb.prototype.newUser = function(newUser) {
	var usrObj = this.User;
	var x = new User(newUser)
	
	x.save(function(err, saveMsg) {
	  if (err) return console.error(err);
	  console.log(saveMsg);
	});
}

// Schema's for data input



//Movie database object
var User = mongoose.model('User', userSchema);




