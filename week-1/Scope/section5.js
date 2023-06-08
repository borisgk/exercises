
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

// found not defined - epic fail

/*

[Running] node "/Users/borisk/code/bootcamp/exercises/week-1/Scope/section5.js"
/Users/borisk/code/bootcamp/exercises/week-1/Scope/section5.js:9
    return found
    ^

ReferenceError: found is not defined

*/