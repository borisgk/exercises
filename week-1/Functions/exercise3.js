const isInArray = function(array, number) {
    for (element of array) {
        if (element == number) {
            return true
        }
    }
    return false
}

const myNumbers = [2, 12, 85, 06, 355, 113, 142857, 314, 628] 

console.log(isInArray(myNumbers, 12))
console.log(isInArray(myNumbers, 13))
