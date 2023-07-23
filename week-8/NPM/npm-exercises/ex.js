import validator from "validator"

console.log(validator.isEmail("shoobert@dylan"))

console.log(validator.isMobilePhone("786-329-9958", "en-US"))

let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"
console.log(validator.blacklist(text, blacklist).toLowerCase())


import {faker} from '@faker-js/faker/locale/en'

const makeHuman = function(number) {
    let newHumans = []
    for (let i = 0; i < number; i++) {
        const newHuman = {}
        newHuman.name = faker.person.fullName()
        newHuman.avatar = faker.image.avatar()
        newHuman.company = faker.company.name()
        newHumans.push(newHuman)
        console.log(newHuman.name, newHuman.avatar, newHuman.company)
    }
}

makeHuman(16)