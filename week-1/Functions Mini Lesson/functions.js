people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str){
    let capitalizedStr = ""

    let words = str.split(" ")
    for (word of words) {
        let cappedWord = ""
        cappedWord += word[0].toUpperCase()
        cappedWord += word.slice(1)
        capitalizedStr += cappedWord
        capitalizedStr += " "
    }
    capitalizedStr = capitalizedStr.trim()
    return capitalizedStr
}

const formatAge = function(num){
    if (num > 55) {
        return "a 55+"
    }
    if (num < 21) {
        return "an underage"
    }
    return "a " + num + " year old"
}

const formatAddress = function(city, country){
    return capitalize(city) + ", " + capitalize(country)
}

const capitalizeFirstLetter = function(str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase()
    capitalizedStr += str.slice(1)
    return capitalizedStr    
}

const formatPhrase = function(str) {
    return "\"" + capitalizeFirstLetter(str) + "\""
}

const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += " is "
  summary += formatAge(person.age)
  summary += " "
  summary += capitalize(person.profession)
  summary += " from "
  summary += formatAddress(person.city, person.country)
  summary += ". "
  summary += capitalize(person.name)
  summary += " loves to say "
  summary += formatPhrase(person.catchphrase)
  summary += "."
  return summary
}

for (person of people_info) {
    console.log(getSummary(person))
}