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
