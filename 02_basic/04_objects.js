// const tinder = new Object() // singleton object
const tinder = {} // non sigleton object

tinder.name = "tanmay"
tinder.age = 21
tinder.language = "javascript"

const user = {
    name: {
        firstname: "tanmay",
        lastname: "kumar"
    },
    age: 21
}
// console.log(user.name.firstname);

const obj1 = {1:"a"}
const obj2 = {2:"b"}

// const obj3 = Object.assign({},obj1,obj2) // merge object
const obj3 = {...obj1,...obj2}
// console.log(obj3);

console.log(Object.keys(user)); // all the keys of user object will come in the array k
console.log(Object.values(user));
console.log(Object.entries(user));










