const fs = require('fs')

var raw = fs.readFileSync('./data.json')
var data = JSON.parse(raw)

// Write a named function that receives a single parameter, user.
// Using forEach and the named function you just wrote, console log “NAME lives in CITY, 
// and owns the company COMPANY_NAME” for each user.


const getUserInfo = function (user) {
    console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)
}


data.forEach(getUserInfo)