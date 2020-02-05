global.ABSPATH = __dirname;
global.INCPATH = ABSPATH + "/libs";

const path = require("path");
const express = require("express");
const app = express();
const config = require(INCPATH + "/config");
const log = require(INCPATH + "/log")(module);
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./config/swagger.yaml");
const articles = require('./appRequests');
const dataBase = require('./mongoose');

app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(function (req, res, next) {
  console.log('LOGGED');
  next();
});
app.use('/api', articles);
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.listen(config.get("port"), function() {
  log.info("Server start running on port " + config.get("port"));
});
