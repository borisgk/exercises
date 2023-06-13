const coffeeShop = {
    money: 1000,
    beans: 40,
    price: 5,
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 3},
      doubleShot: {beanRequirement: 15, price: 7},
      frenchPress: {beanRequirement: 12, price: 6}
    },

    buyBeans: function (numBeans) {
        let sum = numBeans * this.price
        if (sum < this.money) {
            this.money -= sum
            this.beans += numBeans
            console.log("Purchased " + numBeans + " beans for " + sum)
        } else {
            console.log("Not enough money to get " + numBeans + " beans.")
        }
    },
  
    makeDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log("Sorry, we do not make " + drinkType)
            return false
        }
        if (this.drinkRequirements[drinkType].beanRequirement <= this.beans) {
            this.beans -= this.drinkRequirements[drinkType].beanRequirement
            console.log("Here is your " + drinkType)
            return true
        } else {
            console.log("Sorry, we’re all out of beans!")
            return false
        }
    },

    buyDrink: function (drinkType) {
        // calling makeDrink first and charging only if drink was served
        if (this.makeDrink(drinkType)) {
            this.money += this.drinkRequirements[drinkType].price
            console.log("Our money is now " + this.money)
        }
    }
  }


  /* 

    Only allows you make a drink if it’s a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don’t make "
    Reduces the beans count according to the drinkRequirements object and the given drinkType
    Alerts “Sorry, we’re all out of beans!” if there are not enough beans to make that drink

 */

  coffeeShop.buyDrink("latte"); 
  coffeeShop.buyDrink("americano");
  coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.buyDrink("doubleShot");
  coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

  coffeeShop.buyBeans(50)
  coffeeShop.buyDrink("frenchPress"); 
