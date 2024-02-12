const express = require("express");
const app = express();
app.use(express.json());
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const cors=require("cors")
app.use(express.json())
app.use(cors())

app.post("/todo",async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }
  //   put it in mongo
  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
  })
  res.json({
    msg:"Todo created"
  })
});
app.get("/todos", async function (req, res) {
    const allTodos=await todo.find({})
    res.json({
        allTodos
    })


});

app.put("/completed",async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }
  await todo.update({
    _id:req.body.id
  },{
    completed:true
  })
  res.json({
    msg:"Todo marks as completed"
  })


});
app.listen(3000);
