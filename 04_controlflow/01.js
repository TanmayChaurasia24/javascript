// nullish coalescing operator (??) : deals with null and undefined only
// let val1 = 3 ?? 10 // 3
// let val1 = null ?? 10 //10
// let val1 = undefined ?? 10 //10
let val1 = undefined ?? null //null

console.log(val1);