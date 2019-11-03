const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("API RUNNING");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// just to see if branches work
