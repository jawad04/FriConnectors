const express = require("express");
const router = express.Router();
const { check, valiadtionResult } = require("express-validator");

// @route POST api/users
// @description Register User
//@access public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty()
  ],
  (req, res) => {
    console.log(req);
    res.send("User route");
  }
);

module.exports = router;
