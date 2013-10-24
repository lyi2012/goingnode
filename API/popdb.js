var express = require('express'),
    app = express();
    //myDb = require('./chatdb')

// Start
    var mongoose = require('mongoose');

	var db = mongoose.connection;
	
	

	db.on('error', console.error);
	db.once('open', function() {
		console.log('Database Connected.');
	});
	
	mongoose.connect('mongodb://root:nodeday@mongo.onmodulus.net:27017/tyt9Iwas');
	
	var userSchema = new mongoose.Schema({
	  user_id: String,
	  password: String
	});

	var msgSchema = new mongoose.Schema({
	  user_id: String,
	  timestamp: Date,
	  message: String,
	  blob: String
	});
	
	var User = mongoose.model('User', userSchema);
	var Msg = mongoose.model('Message', msgSchema);

	var ChatDb = {
	"User": mongoose.model('User', userSchema),
	"Msg" : mongoose.model('Message', msgSchema)
	};



ChatDb.newUser = function(newUser) {
	console.log("New User!");
	var userModel = this.User;
	var x = new  userModel(newUser)
	
	x.save(function(err, saveMsg) {
	  if (err) return console.error(err);
	  console.log(saveMsg);
	});
}

// Stop

//Helps parse the request body for JSON POSTs
app.use(express.bodyParser());

console.log("My models: " + ChatDb);

app.get('/users', function(req, res) {
	ChatDb.User.findOne({user_id:'testing'},function(err, testUser) {
		console.log(testUser);
	});
});

app.get('/user/:id', function(req, res) {
  User.get(req.params.id, function(err, dude) {
    if(err) {
      res.send({
        error: err.message
      });
    }

    res.send(dude);
  });
});

app.post('/user', function(req, res) {
  if(!req.body.user_id) {
    return res.send({
      error: 'Users require at least a username.'
    });
  }

  new ChatDb.User(req.body).save(function(req, test) {
	console.log("in save()");
	res.send();
  });
  //User.create(req.body, function(err, dude) {
  //  if(err) {
  //    res.send({
  //      error: err.message
  //    });
  //  }
  //
  //  res.send(dude);
  //});
});

app.delete('/user/:id', function(req, res) {
  User.delete(req.params.id, function(err) {
    if(err) {
      res.send({
        error: err.message
      });
    }

    res.send({});
  });
});

//Start the server
app.listen(8675); //309