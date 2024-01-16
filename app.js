// Importing necessary modules
const express = require("express");
const cors = require("cors");

// Configurations
const config = { port: process.env.PORT || 3000 };

// Initialization express application
const app = express();

// Applying middleware
app.use(cors());

// API routes
app.get("/lorem", (req, res) => {
  const loremText =
    "Dolor esse cupidatat ipsum commodo ut duis id esse voluptate. Consectetur cupidatat non qui sint amet minim aute aliquip.";
  res.json({ lorem: loremText });
});

// Handling non-existing routes
app.get("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// start server
app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`);
});
