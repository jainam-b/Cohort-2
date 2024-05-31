interface User{
    firstname: string;
    lastname:string;
    age:number;
}

function isLegal(user:User){
    if(user.age>18){
        return true;
    }else{
        return false
    }
}

isLegal({
    firstname:"jainam",
    lastname:"bagrecha",
    age:20
})
