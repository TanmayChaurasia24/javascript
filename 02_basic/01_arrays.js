const myarray = [1,2,3,4,5,6]
const arr = new Array(1,2,5)

// console.log(arr);
// console.log(myarray);   

// array methods

// myarray.push(6)
// myarray.push(10)
// myarray.push(5)
// myarray.pop()
// myarray.unshift(9) // comes at the front of the array
// myarray.shift() // remove 9 
// console.log(myarray.includes(5));
// console.log(myarray.indexOf(4));

// console.log(myarray);
// -----------------------------------------------------------------
console.log("A",myarray);                                           
const myn1 = myarray.slice(1,3) // does not remove the number 
console.log(myn1);
console.log("B",myarray);
const myn2 = myarray.splice(1,3) // remove the number from 1 to 3 
console.log("C",myarray);
console.log(myn2);

// output
// A [ 1, 2, 3, 4, 5, 6 ]
// [ 2, 3 ]
// B [ 1, 2, 3, 4, 5, 6 ]
// C [ 1, 5, 6 ]
// [ 2, 3, 4 ]

// ----------------------------------------------------------







