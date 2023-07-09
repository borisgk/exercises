class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name) {
        this.children.push(name)
    }
}

let dog = new Animal("Shira", 2)
console.log(dog.name)

dog.giveBirth("Buba")
dog.giveBirth("Orly")
console.log(dog.children)