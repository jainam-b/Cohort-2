const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jainamb:jainamBagrecha@cluster0.h5mn9fs.mongodb.net/");


const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Jainam Bagrecha",
  email: "jainambagrecha16@gmail.com",
  password: "123456789",
});

user.save();
