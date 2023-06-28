const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" }
]

for (n of names) {
  let newDiv = `<div>${n.first} - ${n.last}</div>`
  $("body").append(newDiv)
}