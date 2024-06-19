interface User {
    name: String,
    age: number
    
}

function sumofAge(user1: User, user2: User) {
    return user1.age + user2.age

}

// Pick api lets you to pick some of the attributes from many attributes
interface Users {
    name: String,
    age: number
    email:string,
    password:string
}

type updateProps=Pick<Users,"name"|"age"|"email">

// partial is like optional(name?) but instead of changing at many places we use Partial api

type updatePropsOptional=Partial<updateProps>

const age = sumofAge({ name: "jainam", age: 12 },{name:"bagrecha",age:20});
console.log(age);
