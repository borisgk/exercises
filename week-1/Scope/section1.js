const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 

// should print "distance" 8 times
// should print "Finished running 8 miles"
// should complain about distance not defined

// Good guess:

/*
[Running] node "/Users/borisk/code/bootcamp/exercises/week-1/Scope/section1.js"
running
running
running
running
running
running
running
running
Finished running 8 miles
/Users/borisk/code/bootcamp/exercises/week-1/Scope/section1.js:11
console.log("Damn, you see this gal? She ran " + distance + " miles") 
                                                 ^

ReferenceError: distance is not defined
*/