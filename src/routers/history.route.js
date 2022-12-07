const router = require("express").Router();

const { save } = require("../controllers/history.controller");

router.post("/", save);

module.exports = router;
