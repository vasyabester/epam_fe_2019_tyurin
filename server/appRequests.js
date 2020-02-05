const express = require('express');
const router = express.Router();
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
