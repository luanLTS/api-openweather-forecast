const router = require("express").Router();

const { save, find, findById } = require("../controllers/history.controller");

router.post("/", save);
router.get("/", find);
router.get("/:id", findById);

module.exports = router;
