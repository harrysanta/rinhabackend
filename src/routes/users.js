const express = require("express");
const { users } = require("../controllers");

const router = express.Router();

router.get("/:id", users.getUser);
router.post("/save");

module.exports = router;
