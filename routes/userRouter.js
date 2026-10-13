const express = require("express");
const router = express.Router();
const { readHomes } = require("./homeStore");

router.get("/", (req, res) => {
    res.render("home", {
        registerhouse: readHomes()
    });
});

module.exports = router;
