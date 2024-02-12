var mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jainamb:jainamBagrecha@cluster0.h5mn9fs.mongodb.net/todo_application"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type:Boolean,
    default:false
  },
});
const todo=mongoose.model("todos",todoSchema);
module.exports={
    todo
}