class Vehicle {

    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this._speed = speed
        this._fuel = 60
        Vehicle.carsSold++
    }

    static getInfo() {
        console.log(`We have sold ${Vehicle.carsSold} cars.`)
    }

    static calculateMoney() {
        console.log(`We have made ${Vehicle.carsSold * 30000} dollars.`)
    }

    set speed(value) {
        if (value < 0) {
            console.log("Speed must be positive")
            return
        }
        this._speed = value
    }

    get speed() {
        return this._speed
    }

    set fuel(value) {
        if (value < 0 || value > 150) {
            console.log("Wrong amount of fuel.")
            return
        }
        this._fuel = value
    }

    get fuel() {
        return this._fuel
    }
}

Vehicle.carsSold = 0
car1 = new Vehicle(1, 2, 60)
car2 = new Vehicle(3, 4, 80)
Vehicle.getInfo()
Vehicle.calculateMoney()
car1.speed = 90
console.log(car1.speed)
car2.speed = -65
console.log(car2.speed)
car1.fuel = 300
console.log(car1.fuel)
car1.fuel = -300
console.log(car1.fuel)
car1.fuel = 100
console.log(car1.fuel)
