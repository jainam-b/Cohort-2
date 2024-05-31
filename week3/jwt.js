const jwt = require("jsonwebtoken");

const value = {
  name: "jainam bagrecha",
  accno: 123123,
};
// generate the token
const token = jwt.sign(value, "secret");
//  verify the token
const verifyToken = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFpbmFtIGJhZ3JlY2hhIiwiYWNjbm8iOjEyMzEyMywiaWF0IjoxNzA2ODgyMTE4fQ.KjZovsEHFRCuZ7Rz5CebtNflXq8BNU1aYfi_qrDOdOQ",
  "secret"
);
console.log(verifyToken);
