const name = "tanmay"
const age = 20

console.log(`hello my name is ${name} and my age is ${age}`);

const fullname = new String("tanmay kumar chaurasia")
console.log(fullname.__proto__); // {}
console.log(fullname.length);
console.log(fullname.toUpperCase()); // orignal value does not change
console.log(fullname.charAt(2)); // char at index 2
console.log(fullname.indexOf("t")); // gives the index of t
console.log(fullname.substring(0,5)); // 0 to 5-1
console.log(fullname.slice(-4,5));
let n = "             tanmay                 "
console.log(n)
console.log(n.trim()); // remove white space
const url = "https://tanmaykumar.com"
console.log(url.replace("tanmay","TANMAY")) // does not change the main url string make a new copy 
console.log(url);
console.log(url.includes('kumar'));

console.log(fullname.split('-'));












