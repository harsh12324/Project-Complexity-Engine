const templates = require("../data/templates");

function templatesController(req, res) {
  res.json({ success: true, templates });
}

module.exports = templatesController;
