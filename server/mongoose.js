const mongoose = require('mongoose');
const log = require(INCPATH + '/log')(module);
const config = require(INCPATH + '/config');

mongoose.connect(config.get('db'));
const db = mongoose.connection;

db.on('error', function (err) {
  log.error('connection error:', err.message);
});

db.once('open', function callback () {
  log.info("Connected to DB test!");
});

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  author: { type: String, default : ''},
  date: { type: String, default : ''},
  img: { type: String, default : ''},
  text: { type: String, default : ''},
  quote: { type: String, default : ''},
  title: { type: String, default : ''},
  type: { type: String, default : 'picture'},
  timeRead: { type: String, default : '1 min read'}
});

const ArticleModel = mongoose.model('Articles', ArticleSchema);

module.exports.requestHandlers = {
  onGetAllArticles: function (req, res) {
    ArticleModel.find(function (err, articles) {
      res.end(JSON.stringify(articles));
    });
  },

  onGetAllAuthors: function (req, res) {
      ArticleModel.find(function (err, articles) {
      const allAuthors = articles.map(article => article.author);

      res.end(JSON.stringify(uniqueAuthors(allAuthors)));
    });
  },

  onGetOneArticle: function(req, res) {
    ArticleModel.findById(req.params.id, function(err, article) {
      res.end(JSON.stringify(article));
    });
  },

  onPostArticle: function(req, res) {
    if (req.body._id) {
      ArticleModel.findByIdAndUpdate(req.body._id, req.body, function(err, article) {
        res.end(JSON.stringify(article));
      });
    } else  {
      const newPost = ArticleModel(req.body);

      newPost.save()
        .then(article => {
          res.end(JSON.stringify(article));
        });
    }
  },

  onDeleteArticle: function(req, res) {
    ArticleModel.findByIdAndDelete(req.params.id, function() {
      res.end(JSON.stringify({removed: true}));
    });
  },

  onDeleteAllArticles: function(req, res) {
    ArticleModel.deleteMany(function() {
      res.end(JSON.stringify({removed: true}));
    });
  }
};

function uniqueAuthors(authors) {
  let uniqueAuthors = [];

  for (let author of authors) {
    if (!uniqueAuthors.includes(author)) {
      uniqueAuthors.push(author);
    }
  }

  return uniqueAuthors;
}
