if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}

// the let is never executed
// cowSound not defined

/*

[Running] node "/Users/borisk/code/bootcamp/exercises/week-1/Scope/section2.js"
/Users/borisk/code/bootcamp/exercises/week-1/Scope/section2.js:5
    console.log("Cow says " + cowSound)
                              ^

ReferenceError: cowSound is not defined

*/