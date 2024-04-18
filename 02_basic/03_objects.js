const sym = Symbol("key1")

const user = {
    name: "tanmay kumar chaursia",
    "sirname": "chaurasia", // we cant access this form dot 
    [sym] : "mykey1", // cant access with dot
    age: 21,
    language: "javascript",
    location: "kanpur",
    isthere: true
}

console.log(user.name);
console.log(user["name"]);
console.log(user[sym]); // acessing symbol in the object

user.name = "tanmay" // to change the value
console.log(user.name);

Object.freeze(user) // no one change the user object







