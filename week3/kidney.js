const express=require("express");
const app=express();
app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;
    res.send("you have"+kidneyLength+"kidneys");

});
// global catches helps in giving a better error message 
app.use(function(err,req,res,next){
    res.json({
        msg:"Something is up with the server "
    })
})

app.listen(3000)