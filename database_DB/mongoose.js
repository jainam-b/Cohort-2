const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://jainamb:jainamBagrecha@cluster0.h5mn9fs.mongodb.net/"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const existUser = await User.findOne({ email: username });
  if (existUser) {
    res.status(400).send("Username already exists");
  }
  const user = new User({
    name:  username,
    email: name,
    password: password,
  });
  user.save();
  res.json({
    "msg":"User created succesfully"
  })
});
app.listen(3000);
