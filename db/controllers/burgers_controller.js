var express = require("express");

var router = express.Router();


var burger = require("../../models/burger");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.name, function(result) {
    console.log(result)
  });
});


router.put("/api/burgers/:id", function(req, res) {

  burger.updateOne(req.params.id, req.body.devoured, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;