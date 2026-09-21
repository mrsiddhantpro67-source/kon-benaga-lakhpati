const express = require("express");
const path = require("path");

const app = express();

// Render PORT ya local 3000
const PORT = process.env.PORT || 3000;

// Static files serve karo
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "kbl.html"));
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    game: "Kaun Banega Lakhpati"
  });
});

// Render server start
app.listen(PORT, "0.0.0.0", () => {
  console.log(`KBL server running on port ${PORT}`);
});
