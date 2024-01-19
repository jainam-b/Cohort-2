const express=require("express");
const app=express();

const users=[{
    name:"John",
    kidney:[{
        healthy:false
    }]
}]
app.use(express.json());
app.get("/",function(req,res){
    const johnKidney= users[0].kidney;
    const numberofKidneys=johnKidney.length;
    let numberofHealthyKidneys=0;
    for(let i=0;i<johnKidney.length;i++){
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

app.post("/",function(req,res){
    const isHealthy= req.body.isHealthy;
    users[0].kidney.push({
        healthy:isHealthy  
    })
    res.json({
        msg:"Done!"
    })

})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true;
    }
    res.json({
        msg:"put done!"
    })
})

app.delete("/",function(req,res){
    const newkidney=[];
    for(let i=0;i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy){
            newkidney.push({
                healthy:true
            })
        }
    }
    users[0].kidney=newkidney;
    res.json({msg:"done!"})
})
app.listen(3000)