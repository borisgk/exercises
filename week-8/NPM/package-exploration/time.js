import moment from "moment"

let timeNow = new Date()
console.log(timeNow)

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow)
