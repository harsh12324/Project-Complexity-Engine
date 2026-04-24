const express = require("express");
const analyzeController = require("../controllers/analyzeController");
const templatesController = require("../controllers/templatesController");
const assistantController = require("../controllers/assistantController");

const router = express.Router();

router.post("/analyze", analyzeController);
router.post("/assistant", assistantController);
router.get("/templates", templatesController);

module.exports = router;
