var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var musteriHesapSchema = new mongoose.Schema({
    hesapNumarasi: Number,
    Bakiye: Number,
    AcilisTarihi: Number,
    KapanisTarihi: Number,
    hesapEkNumarasi: Number,
    musteriId: [
        { type: Schema.Types.ObjectId, ref: 'Musteri' }
    ],
    hesapAcikMi: Boolean
});

module.exports = mongoose.model('MusteriHesap', musteriHesapSchema);

