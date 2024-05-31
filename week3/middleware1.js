const express=require("express");
const app=express();
// by using middleware check the age return form query parameter
function isoldEnough(req,res,next){
    const age=req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg:"you are underage"
        })
    }

}

app.get("/ride1",isoldEnough,function(req,res){
    res.json({
        msg:"You have successfully completes the ride"
    })
})
app.listen(3000);