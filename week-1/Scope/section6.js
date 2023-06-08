
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

// isEnough is always false, the local one does not get visible -- actually cannot change the constant value, there is no local one

/*

[Running] node "/Users/borisk/code/bootcamp/exercises/week-1/Scope/section6.js"
/Users/borisk/code/bootcamp/exercises/week-1/Scope/section6.js:7
            isEnough = true
                     ^

TypeError: Assignment to constant variable.

*/