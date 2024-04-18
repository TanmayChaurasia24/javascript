// stack(primitive) heap(non-primitive)


// stack
let name = "tanmay"
let sirname = name // this is make a copy of name it will not point to the same reference

sirname = "chaurasia"
console.table([name,sirname])

// heap 
let userone = {
    name: "tanmay",
    age: 20
}
let usertwo = userone // usertwo will point to userone in heap
usertwo.name = "tanmay kumar chaurasia"

console.table([userone,usertwo])