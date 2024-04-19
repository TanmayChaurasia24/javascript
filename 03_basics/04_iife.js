// immediately invoked function expression (iife)

(function name(){
    console.log("tanmay");
})
(); // execution call

// we have to put ; after the first funtion to tell that the usage of that function has been completed other wise it will throw error

(function sirname(){
    console.log("kumar");
})(); // execution call

// named iife
(function username(username){
    console.log(`${username}`);
})("tanmay kumar chaursia"); // execution call





