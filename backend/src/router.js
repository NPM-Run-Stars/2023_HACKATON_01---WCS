const express = require("express");

const router = express.Router();

const connection = require("./database");

connection
  .getConnection()
  .then(() => {
    console.info("Can reach database");
  })
  .catch((err) => {
    console.error(err);
  });

router.get("/profile", (req, res) => {
  connection
    .query("SELECT * FROM profile")
    .then(([result]) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
