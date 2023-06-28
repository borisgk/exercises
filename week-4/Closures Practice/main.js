function boo () {
    let previousValue = 0
    return add = num => {
        let result = num + previousValue
        previousValue = num
        return result
    }
}

boo()

console.log(add(3));  //3
console.log(add(1));  //4
console.log(add(2));  //3
console.log(add(2));  //4
console.log(add(8));  //10