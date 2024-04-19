const user = {
    username: "tanmay",
    price: 2000,

    welcomemessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this); // print current context
    }
}

// user.welcomemessage() // tanmay
// user.username = "tanmay kumar"
// user.welcomemessage() // tanmay kumar

console.log(this); // {} no current context this will print empty when we will run it in browser then it will print the window object

// function one() {
//     const usernmae = "tanmay"
//     // console.log(this);
//     // console.log(this.usernmae); // undefine
// }

// one()

// we cant use this keyword inside funtions

const addtwo= (num1,num2)=> {
    return num1+num2
}

// console.log(addtwo(2,3));

// implicite return
const addone = (num1,num2) => num1 + num2
console.log(addone(1,1));






