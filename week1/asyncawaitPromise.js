function jainamAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there")
        },1000)
    })
    return p;
}
async function main(){
    let value= await jainamAsyncFunction();
    console.log(value);
    console.log("hii there 1");
}
main();