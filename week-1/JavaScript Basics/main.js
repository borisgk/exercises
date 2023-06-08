console.log("Hello, world!")

let homeCounrty = "Israel"
let anotherCountry

console.log(homeCounrty)
console.log(anotherCountry)

// This would break the execution, so commenting out
/* console.log(exodusCountry) */

let firstPart = "This should "
let secondPart = "show a complete string."
let completeString = firstPart + secondPart
console.log(completeString)

completeString += " And this is not all."
console.log(completeString)

// Comparison has a boolean result
let compareResult = (firstPart == secondPart)
console.log(compareResult) // false

let anotherCompare = (firstPart === "This should ")
console.log(anotherCompare) // true

function isItCheap(price) {
    if (price > 0 && price < 10000) {
        return true
    }
    return false
}
console.log(isItCheap(5000)) // true

// True or false
console.log("True or false goes here:")
console.log((5 > 2) && false)                           // false
console.log(!("knife" === "sword"))                     // true
console.log((1 < 2) || (-1 > -1) || !false)             // true
console.log("" == true)                                 // false
console.log((31 % 5) == "1")                            // true
console.log(!!true)                                     // true
console.log("5th Avenue" != "5th Avenue")               // false 
console.log(52 !== "52")                                // false --> true, since no conversion is done, like in ===
console.log((undefined || null))                        // false --> this is actually "null" -- but this is still false

// Mind-twister
let a = 3
let c = 0
let b = a // b = 3
b = a // b = 3
c = a // c = 3
b = c // b = 3
a = b // a = 3
console.log(a, b, c) // should be all 3 --> yes, they are

// The Tesla
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2015

if (boughtTesla) {
    // looks too explicit but works
    let yearsAgo = currentYear - yearOfTeslaPurchase
    if (isUSCitizen && yearsAgo >= 4) {
        console.log("Wanna upgrade?")        
    } else if (isUSCitizen && yearsAgo < 4) {
        console.log("Satisfied?")
    } else if (!isUSCitizen) {
        console.log("Wanna move to US?")
    }
} else {
    console.log("Wanna buy one?")
}

// Arrays
const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1, 2)  
numbers[3] = 1
numbers.splice(numbers.length - 4, 4)
let newNumbers = [0, ...numbers] // Actually, splice allows to add items too: numbers.splice(0, 0, 0)
console.log(...newNumbers)
newNumbers.splice(10, 1, 45)

   
// Objects
let p1 = {
    name: "Boris",
    age: 51,
    city: "Jerusalem"
}

let p2 = {
    name: "Esther",
    age: 51,
    city: "Jerusalem"
}

if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log(`${p1.name} wanted date ${p2.name}`)
    } else {
        console.log(`${p1.name} wanted date ${p2.name}, but could not`)
    }
}



let library = {
    books: [{title: "Adventure", author: "Jack london"}, {title: "To Kill a Mockingbird", author: "Harper Lee"}]
}
console.log(library)
console.log(`${library.books[0].title} by ${library.books[0].author}`)



// Extra
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    ted: { claimed: false },
    TeD: { claimed: true }
}
  
//const name = prompt('Please enter the name for your reservation');
const theName = "George"

// TODO: lowercase
const lowName = theName.toLowerCase

if (typeof(reservations[theName]) !== 'undefined') {
    if (!reservations[theName].claimed) {
        console.log("Hi, " + theName)
    } else {
        console.log("Hi, " + theName + ". Your reservation is claimed.")
    }
} else {
    console.log("Reservation for " + theName + " not found.")
    // Adding new customer
    reservations.theName = {claimed: true}
    console.log("Added user " + theName + ": " + reservations.theName.claimed)
}

// Loops
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (index in names) {
    people.push({name: names[index], age: ages[index]})
    console.log(people[index])
}

for (person of people) {
    console.log(`${person.name} is ${person.age} years old.`)
}