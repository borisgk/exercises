const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    buyDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log("Sorry, we do not make " + drinkType)
        } else if (this.drinkRequirements[drinkType] <= this.beans) {
            this.beans -= this.drinkRequirements[drinkType]
            console.log("Here is your "+ drinkType)
        } else {
            console.log("Sorry, we’re all out of beans!")
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