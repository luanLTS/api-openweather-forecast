const router = require("express").Router();

const { save, find } = require("../controllers/history.controller");

router.post("/", save);
router.get("/", find);

module.exports = router;
