const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

const app = express();

// connect to database

connectDB();

// init Midleware
app.use(express.json({ extended: false }));

// Define routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));

app.get("/", (req, res) => {
  res.send("API RUNNING");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// just to see if branches work
