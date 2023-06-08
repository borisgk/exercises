const greet = function () {
    console.log("This works!")
}

greet()

const person = {
    name: "Julius",
    speak: function () {
        console.log("Et tu, Brutus?")
    },
    eat: function (food) {
        console.log("I like " + food)
    }
}

console.log(person.name)
person.speak()
person.eat("falafel")
