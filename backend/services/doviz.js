var express = require("express");
var router = express.Router();


var doviz = {
    router, checkAuthenticated: (req, res, next) => {
        next();
    }
};

router.get("/kur", (request, response) => {
    (async () => {
        const TCMB_Doviz = require('tcmb-doviz');
        const Doviz = new TCMB_Doviz();
        const res = await Doviz.DovizListesi();
        return response.json(res);
    })();
});
router.get("/guncelDovizTarih", (request, response) => {
    (async () => {
        const TCMB_Doviz = require('tcmb-doviz');
        const Doviz = new TCMB_Doviz();
        const res = await Doviz.guncelTarih();
        return response.json(res);
    })();
});
module.exports = doviz