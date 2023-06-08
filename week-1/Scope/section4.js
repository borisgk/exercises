const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()

// seed not defined, pot is, but that won't help to print anything

/*

[Running] node "/Users/borisk/code/bootcamp/exercises/week-1/Scope/section4.js"
/Users/borisk/code/bootcamp/exercises/week-1/Scope/section4.js:9
    console.log("Planting the " + seed + " inside a " + pot)
                                  ^

ReferenceError: seed is not defined
    at plant (/Users/borisk/code/bootcamp/exercises/week-1/Scope/section4.js:9:35)
    at Object.<anonymous> (/Users/borisk/code/bootcamp/exercises/week-1/Scope/section4.js:12:1)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0

[Done] exited with code=1 in 0.128 seconds

*/