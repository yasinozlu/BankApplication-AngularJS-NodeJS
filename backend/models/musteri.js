var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var musteriSchema = new mongoose.Schema({
  TcNo: Number,
  Ad: String,
  SoyAd: String,
  Telefon: Number,
  Sifre: String
});



module.exports = mongoose.model('Musteri', musteriSchema);

