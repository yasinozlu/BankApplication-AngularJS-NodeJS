var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var doviz = require('./services/doviz');
var musteriHesap = require("./services/musteriHesap")
var musteri = require('./services/musteriService')
app.use(cors());
app.use(bodyParser.json());


try {
  mongoose.connect(
    "mongodb+srv://NodeDb:123@nodedb-cnyzx.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
} catch (error) {
  console.log("This is Err:" + error);
}

app.use('/doviz', doviz.router);
app.use('/musteri', musteri.router);
app.use('/musteriHesap', musteriHesap.router);


app.listen(8080);
