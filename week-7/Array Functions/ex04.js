const fs = require('fs')

var raw = fs.readFileSync('./data.json')
var data = JSON.parse(raw)

// Create an array of only names, then only keep the names that start with with the letter "C".
// You should be left with ["Clementine Bauch", "Chelsey Dietrich", "Clementia DuBuque"]


const filteredData = data
    .map(u => u.name)
    .filter(n => n[0] === "C")


console.log(filteredData)