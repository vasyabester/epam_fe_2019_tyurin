//getting static file
const express = require('express');
const router = express.Router();
const log = require(INCPATH + "/log")(module); //log is a function. which is called with the current model to which
// it is connected
let articles = require("./config/articles.json");

router.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

router.get("/articles", function(req, res) {
  log.info("==Get all articles articles==");
  res.end(JSON.stringify(articles));
});

router.post("/articles", function(req, res) {
  log.info("==Save article==");

  if (req.body.id) {
    const indexItem = articles.findIndex((item) => {
      return item.id === req.body.id;
    });

    articles[indexItem] = req.body;
  } else  {
    req.body.id = _generateID();
    articles.push(req.body);
  }

  res.end(JSON.stringify(req.body));
});

router.get("/articles/:id", function(req, res) {
  log.info("==Get article by id==");
  const articleById = articles.find(article => +article.id === +req.params.id);
  res.end(JSON.stringify(articleById));
});

router.delete("/articles/:id", function (req, res) {
  log.info('==Delete article by id==');
  const indexArticleById = articles.findIndex(article => +article.id === +req.params.id);
  console.log(indexArticleById);
  const removedItem = articles.splice(indexArticleById, 1);

  res.end(JSON.stringify(removedItem));
});

router.delete("/articles", function (req, res) {
  log.info('==Delete All articles==');

  articles = [];

  res.end(JSON.stringify({deleted: true}));
});

function _generateID() {
  return new Date().getTime();
}

module.exports = router;
