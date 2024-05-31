// const express=require("express");
// const app=express();
// const zod =require("zod");
// // structure of zod 
// const schema=zod.array(zod.number);
// // defining the  body to be in  json format 
// app.use(express.json());

// app.post("/health-checkup",function(req,res){
//     const kidneys=req.body.kidneys;
//     const response=schema.safeParse(kidneys);
//     res.send({
//         response
//     })

// });
// app.listen(3000);


// example of zod independent of express and it can be use alone 
const zod =require("zod");
function validateInput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response=schema.safeParse(obj);
    console.log(response);
    console.log(response.success);

}
validateInput({
    email:"jainam@gmail.com",
    password:"123456789"
})