const fs = require('fs')

var raw = fs.readFileSync('./data.json')
var data = JSON.parse(raw)

const mappedData = data.map(d => {return {email: d.email, name: d.name}})

console.log(mappedData)

