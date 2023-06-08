function foo(){
    let sum = 0
    for (let i = 1000; i < 2000; i++){
        if (i % 203 === 0){
            sum += getSecondDigit(i)
        } else if (i % 497 === 0) {
            sum += getLastDigit(i)
        } else if (i % 293 === 0) {
            sum += getLastDigit(i*13)
        } 
    }
    return sum
}

function getSecondDigit(number){
    return parseInt(number.toString().split("")[0])
}

function getLastDigit(number){
    return parseInt(number.toString().split("")[number.toString().length - 1])
}

foo()

/*

Is there a time when getSecondDigit is being called with the number 1623 as a parameter? -- NO
How many times getLastDigit is being called when i % 293 === 0? -- 3
Is there a time when getLastDigit is being called with a number parameter that has 1 as it’s last digit? what is the value of that number parameter? -- 1491

*/

/*

What is the largest value of number % 18 when calling getSecondDigit ? -- 17
What is the value of sum * 33 after the first time getLastDigit is being called? -- 33

*/