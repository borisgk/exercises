const isEven = function (number) {
    if (number % 2 == 0) {
        return true
    }
    return false
}

const printOdds = function (numbers) {
    for (number of numbers) {
        if (!isEven(number)) {
            console.log(number)
        }
    }
}

const myNumbers = [2, 12, 85, 06, 355, 113, 142857, 314, 628]

printOdds(myNumbers)