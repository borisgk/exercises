const fs = require('fs')

var raw = fs.readFileSync('./data.json')
var data = JSON.parse(raw)

// Modify your code from Exercise 2 so that your resulting array only has the IDs of the matching users. 
// You should chain your filter with a map. Ultimately, you should just have this array: [3, 4, 7]

const filteredData = data.filter(d => d.address.zipcode[0] === "5").map(u => u.id)

console.log(filteredData)