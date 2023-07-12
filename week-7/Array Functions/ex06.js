const fs = require('fs')

var raw = fs.readFileSync('./data.json')
var data = JSON.parse(raw)

// Find the user who’s suite is “Apt. 950” - console log her company’s name.
// Your code should print out "Considine-Lockman".

targetUser = data
    .find(u => u.address.suite === "Apt. 950")


console.log(targetUser.company.name)