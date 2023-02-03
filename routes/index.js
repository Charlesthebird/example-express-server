var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/ping", function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true").send("working");
});

router.get("/example", function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true").send({
    testing: 123,
  });
});

module.exports = router;
