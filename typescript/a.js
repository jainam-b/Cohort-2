"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firstname: "jainam",
    lastname: "bagrecha",
    age: 20
});
