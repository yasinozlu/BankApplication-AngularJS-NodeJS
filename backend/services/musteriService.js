var express = require("express");
var router = express.Router();
var Musteri = require("../models/musteri");
var jwt = require("jwt-simple");


router.post('/register', async (req, res, next) => {
    var musteriData = req.body;
    var musteri = new Musteri(musteriData);
    var ismusteri = await Musteri.findOne({ TcNo: musteriData.TcNo })
    console.log(ismusteri)
    if (musteri) {
        if (ismusteri == null) {
            musteri.save((error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).send({ message: error });

                }
                return res.status(201).send({ message: "Kayit Basarili" });

            });
        }
        else {
            return res.send({ message: "Girdiginiz Kimlik Numarasi Sisteme Kayitli" })
        }

    }

});



var musteri = {
    router, checkAuthenticated: (req, res, next) => {
        if (!req.header('authorization')) {
            return res.status(401).send({ message: "Giriş Yapılmamiş" })
        }
        var token = req.header("authorization").split(' ')[1];
        var payload = jwt.decode(token, '12345')

        if (!payload) {
            return res.status(401).send({ message: "Geçersiz Token Girişi" })
        }

        next();
    }
}


router.post('/login', async (req, res) => {
    var musteriData = req.body;
    var musteri = await Musteri.findOne({ TcNo: musteriData.TcNo, Sifre: musteriData.Sifre })


    if (!musteri) {
        return res.status(401).send({ message: "Kimlik Numarasi ve Sifre Hatali" });
    }
    if (musteriData.password != musteri.password && musteriData.TcNo != musteri.TcNo) {
        return res.status(401).send({ message: "Kimlik Numarasi ve Sifre Hatali" });
    }
    var payload = {};
    var token = jwt.encode(payload, '12345');

    return res.status(200).send({ token, musteri });
});

router.get('/list', musteri.checkAuthenticated, async (req, res) => {
    var musteris = await Musteri.find({}, '-__v -_id ')
    res.send(musteris);
});



module.exports = musteri