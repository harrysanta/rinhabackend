const express = require("express");
const { users } = require("../controllers");

const router = express.Router();

router.get("/", users.getUser);
router.post("/save");

module.exports = router;
