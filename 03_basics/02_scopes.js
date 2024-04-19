// var c = 300
let a = 300

if(true) {  
    let a = 10
    const b = 20
    // console.log(a); // 10
    // var c = 30 // this is why we avoid var
}

// console.log(a); // 300
// console.log(b); // error
// console.log(c); // 30

function one() {
    const name = "tanmay"

    function two() {
        const website = "youtube"
        console.log(name); // tanmay
    }

    // console.log(website); // error
    two()
}

one()


console.log(addone(5)) // no error
function addone(num){
    return num+1
}

addtwo(5) //error
const addtwo = function(num) {
    return num+2
}


