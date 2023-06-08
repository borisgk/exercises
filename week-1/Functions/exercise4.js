const calculator = {
    add: function(numOne, numTwo) {
        return numOne + numTwo
    },
    subtract: function(numOne, numTwo) {
        return numOne - numTwo
    }
}

// Testing

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42 - it does.
