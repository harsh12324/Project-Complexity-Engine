const express = require("express");
const cors = require("cors");
const analyzeRoutes = require("./routes/analyzeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Project Complexity Intelligence Engine API" });
});

app.use("/api", analyzeRoutes);

module.exports = app;
