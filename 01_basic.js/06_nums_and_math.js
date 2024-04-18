const score = 400
console.log(score); // number

const balance = new Number(100)
console.log(balance); // object

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 2 value after point
const othernumber = 23.566
console.log(othernumber.toPrecision(2));

const hundred = 10000
console.log(hundred.toLocaleString('en-IN')); // convert to indian style number representation

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// -----------------math----------------------------

console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.min(2,3,6,8)); // smallest in array

console.log((Math.random()*100)+1);

const min = 10
const max = 30

console.log(Math.floor((Math.random()*(max-min+1)))+min);










