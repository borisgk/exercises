let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

let olderThan16 = []
for(let age of ages){
  if(age > 16){
    olderThan16.push(age)
  }
}

console.log(olderThan16)

let olderThan16_2 = ages.filter(a => a > 16)
console.log(olderThan16_2)