const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

let form = document.getElementById("form")

form.onsubmit = function() {
    let name = document.getElementById("name")
    let client = name.value
    checkReservation(client)
}

function checkReservation(str) {
    if (!reservations[str]) {
        alert("You have no reservation")
    } else if (reservations[str].claimed) {
        alert("Hmm, someone already claimed this reservation")
    } else {
        alert("Welcome, " + str)
    }
}