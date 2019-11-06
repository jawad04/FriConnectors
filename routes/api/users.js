const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const gravatar = require("gravatar");

// @route POST api/users
// @description Register User
//@access public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      // See if user exists
      const user = User.findOne({ email });
      if (user) {
        res.status(400).send({ errors: [{ msg: "User already exists" }] });
      }
      // Get user's avatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });
      user = new User({
        name,
        email,
        passowrd,
        avatar
      });
      // Encrypt password
      // return jsonwebtoken
      res.send("User route");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
    //
  }
);

module.exports = router;
