const myObject = {
    numbers: [],

    initNumbers: function (howMany) {
        this.numbers.length = 0
        for (i = 0; i < howMany; i++) {
            this.numbers.push(Math.floor(Math.random() * 1000))
        }
        console.log(this.numbers)
    },

    [Symbol.iterator]() {
        let index = 0;
        let myNumbers = this.numbers
    
        return {
          next: () => {
            while (index <= myNumbers.length) {
              if (myNumbers[index] % 2 === 0) {
                index++;
                return { value: myNumbers[index - 1], done: false };
              }
              index++;
            }
            return { done: true };
          }
        };
      }
}

myObject.initNumbers(32)

for (let x of myObject) {
    console.log(x)
}