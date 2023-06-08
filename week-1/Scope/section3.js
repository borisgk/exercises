const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

// should work fine imho

/* 

[Running] node "/Users/borisk/code/bootcamp/exercises/week-1/Scope/section3.js"
Served a special fish
Served a special lettuce plate
Served a special curious cheese
Finished serving all the orders: fish,lettuce plate,curious cheese

[Done] exited with code=0 in 0.175 seconds

*/