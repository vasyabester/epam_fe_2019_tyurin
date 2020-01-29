//getting static file
const express = require('express');
const router = express.Router();
const log = require(INCPATH + "/log")(module); //log is a function. which is called with the current model to which
// it is connected
let articles = require("./config/articles.json");

const requestHandlers = require('./mongoose').requestHandlers;

router.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

router.get("/articles", requestHandlers.onGetAllArticles)
      .get("/articles/:id", requestHandlers.onGetOneArticle)
      .post("/articles", requestHandlers.onPostArticle)
      .delete("/articles/:id", requestHandlers.onDeleteArticle)
      .delete("/articles", requestHandlers.onDeleteAllArticles);

module.exports = router;
