const express=require("express");
const app=express();

const users=[{
    name:"John",
    kidney:[{
        healthy:false
    }]
}]

app.get("/",function(req,res){
    const johnKidney= users[0].kidney;
    const numberofKidneys=johnKidney.length;
    const numberofHealthyKidneys=0;
    for(let i=0;i<johnKidney;i++){
        if(johnKidney[i].healthy){
            numberofHealthyKidneys=numberofHealthyKidneys+1;
        }
    }
    const numberofUnhealthyKidneys=numberofKidneys-numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })
     
})
app.listen(3000)