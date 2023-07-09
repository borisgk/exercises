class Human {
    constructor(name, age, isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

let man = new Human("Boris", 51, false)

console.log(man.name, man.age, man.isFriendly)