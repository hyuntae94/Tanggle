const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
    res.send("Main Home");
});

router.get('/home', function (req, res) {
    res.send("Welcome Home");
});

router.get('/home', function (req, res) {
    res.send("Welcome Home");
});
module.exports = router;
