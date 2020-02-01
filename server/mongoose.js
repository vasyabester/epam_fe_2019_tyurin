const mongoose = require('mongoose');
const log = require(INCPATH + '/log')(module);
const config = require(INCPATH + '/config');

mongoose.connect(config.get('db'));
const db = mongoose.connection;

db.on('error', function (err) {
  log.error('connection error:', err.message);
});
db.once('open', function callback () {
  log.info("Connected to DB!");
});

const Schema = mongoose.Schema;

const Article = new Schema({
  id: { type: Number, default : 0 },
  author: { type: String, default : ''},
  date: { type: String, default : ''},
  img: { type: String, default : ''},
  text: { type: String, default : ''},
  quote: { type: String, default : ''},
  title: { type: String, default : ''},
  type: { type: String, default : 'picture'},
  timeRead: { type: String, default : '1 min read'}
});

module.exports.UserModel = mongoose.model('User', User);
