//getting static file
const express = require('express');
const router = express.Router();
const log = require(INCPATH + "/log")(module); //log is a function. which is called with the current model to which
// it is connected
const fs = require("fs");
let list;

fs.readFile("./config/articles.json", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  list = data;
  list = JSON.parse(list);
});

router.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

router.get("/articles", function(req, res) {
  log.info("==Get all list articles==");
  res.end(JSON.stringify(list));
});

router.post("/articles", function(req, res) {
  log.info("==Save article==");

  if (req.body.id) {
    const indexItem = list.findIndex((item) => {
      return item.id === req.body.id;
    });

    list[indexItem] = req.body;
  } else  {
    req.body.id = _generateID();
    list.push(req.body);
  }

  res.end(JSON.stringify(req.body));
});

router.get("/articles/:id", function(req, res) {
  log.info("==Get article by id==");
  const articleById = list.find(article => +article.id === +req.params.id);
  res.end(JSON.stringify(articleById));
});

router.delete("/articles/:id", function (req, res) {
  log.info('==Delete article by id==');
  const indexArticleById = list.findIndex(article => +article.id === +req.params.id);
  console.log(indexArticleById);
  const removedItem = list.splice(indexArticleById, 1);

  res.end(JSON.stringify(removedItem));
});

router.delete("/articles", function (req, res) {
  log.info('==Delete All articles==');

  list = [];

  res.end(JSON.stringify({deleted: true}));
});

function _generateID() {
  return new Date().getTime();
}

module.exports = router;
