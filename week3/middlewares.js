const express=require("express");
const app=express();
let numberofrequest=0;
// a function that counts the number of request getting to the server by this we can see how much load is on server
function calculateRequest(req,res,next){
    numberofrequest++
    console.log(numberofrequest);
    next();
}
app.get("/",calculateRequest,function(req,res){
    res.send("done")
})

app.listen(3000)