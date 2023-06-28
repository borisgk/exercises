let header = $("h1")
//console.log(header)


// console.log(jQuery)

/*
const myQuery = function (selector) {
    if (selector[0] == "#") {
        const elementId = selector.split("#")[1] //will return everything after the # in selector 
    return document.getElementById(elementId)
        }
    }
console.log(myQuery("#anID"))
*/

// SPOTCHECK 2

$("h1").css("color", "blue")
$("div.red-div").css("color", "red")
$("ul > li:first-child").css("color", "green")
$("ul > li:last-child").css("color", "pink")
$("div#brown-div").css("color", "brown")

// SPOTCHECK 3

$("#b1").addClass("box")
$("#b2").addClass("box")

// SPOTCHECK 4

$("#my-input").val("Enter something!")

// SPOTCHECK 5

/*
let expirable = $("#expirable")
let barcode = expirable.data().barcode
let expirationDate = expirable.data().expirationdate
console.log(`Item with barcode ${barcode} expires on ${expirationDate}.`)
*/

// SPOTCHECK 6
$("#abc").hover(function () {
    $("#abc").css("background-color", "blue")
})
    