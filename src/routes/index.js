const { Router } = require("express");
const router = Router();

const { getRunners, createRunner } = require("../controllers/runner");

router.get("/runners", getRunners);
router.post("/runners", createRunner);

module.exports = router;
