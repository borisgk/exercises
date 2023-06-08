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

if (p1.age == p2.age && p1.city == p2.city) {
    console.log(`${p1.name} wanted date ${p2.name}`)
} else {
    console.log(`${p1.name} wanted date ${p2.name}, but could not`)
}





let library = {
    books: [{title: "Adventure", author: "Jack london"}, {title: "To Kill a Mockingbird", author: "Harper Lee"}]
}
console.log(library)
console.log(`${library.books[0].title} by ${library.books[0].author}`)

