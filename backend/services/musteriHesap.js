var express = require("express");
var router = express.Router();
var MusteriHesap = require("../models/musteriHesap")

var musteriHesap = {
    router, checkAuthenticated: (req, res, next) => {
        next();
    }
}

router.post('/createBankAccount', async (req, res) => {
    var musteriData = req.body;
    var musteriHesap = new MusteriHesap(musteriData);
    if (musteriData.musteriId.match(/^[0-9a-fA-F]{24}$/)) {
        var isHesap = await MusteriHesap.findOne({ musteriId: musteriData.musteriId }, function (err, adventure) {
            if (err) {
                console.log(err)
                return res.status(500).send({ err });
            }
            if (adventure == null) {
                return res.send({ message: "Hesap Olusturulmasi Gerekmektedir" });
            }
            else if (adventure['hesapNumarasi'] != null) {
                return res.send({ message: "Önceden Olusturulmus Hesabiniz Vardir" });
            }

        });
    }
    else {
        console.log("Lütfen Gecerli Bir id parametresi kullanin");
    }
    if (musteriHesap) {
        if (isHesap == null && isHesap == undefined) {
            musteriHesap.save((error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).send({ message: error });

                }
                return res.status(201).send({ message: "Banka Hesabi Olusturuldu" });

            });
        }
    }
})


router.put('/havale', async (req, res) => {
    var havaleData = req.body;
    const bakiye = havaleData['Bakiye'];
    console.log(bakiye)
    let isHesap = await MusteriHesap.findOne({ hesapNumarasi: havaleData.HesapNumarasi }, function (err, adventure) {
        if (err) {
            console.log(err)
            return res.send({ err });
        }
        if (adventure == null) {
            return res.send({ message: "Hesap Numarasi Bulunamadi" });
        }
        else if (adventure == undefined) {
            return res.send({ message: "Hesap Numarasi Bulunamadi" });
        }
        else {

            adventure.Bakiye += Number(bakiye)
            adventure.save((error, result) => {
                if (error) {
                    console.log(error)
                    return res.send({ message: "Hesap Numarasi Bulunamadi" });
                }
                else {
                    return res.status(201).send({ message: "Bakiye Yatirma İslemi Gerceklestirildi" });
                }
            });

        }

    });



})


/*
RANDOM HESAP NUMARASI ÜRETME
function random() {
    min = 10000000;
    max = 99999999;
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

*/


module.exports = musteriHesap;