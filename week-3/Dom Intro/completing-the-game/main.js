const playingField = document.getElementById("playing-field")

console.log(playingField)

const downArrow = document.getElementById("down")

console.log(downArrow)
console.log(downArrow.innerHTML)

/* downArrow.innerHTML = "Down" */

console.log(playingField.innerHTML)

const ball = document.getElementById("ball")
ball.style.backgroundColor = "yellow"

const moveRight = function(){
    let ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    ball.style.left = `${left + 15}px`
}

//console.log(document)

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "This is a must play game for sure."
subHeader.setAttribute("class", "subheader")
document.body.appendChild(subHeader)



const moveBall = function(str) {
    let ball = document.getElementById("ball")
    let top = parseInt(ball.style.top) || 0
    let left = parseInt(ball.style.left) || 0
    switch (str) {
        case "up":
            if (top > 0) {
                ball.style.top = `${top - 15}px`
            }
            break
        case "down":
            if (top < 400) {
                ball.style.top = `${top + 15}px`
            }
            break
        case "left":
            if (left > 0) {
                ball.style.left = `${left - 15}px`
            }
            break
        case "right":
            if (left < 400) {
                ball.style.left = `${left + 15}px`
            }
            break
    }
}

// Adding events to arrow divs
let up = document.getElementById("up")
const down = document.getElementById("down")
const left = document.getElementById("left")
const right = document.getElementById("right")

/* up.onclick = moveBall("up")
down.onclick = moveBall("down") */

up.onclick = function() {
    moveBall("up")
}

down.onclick = function () {
    moveBall("down")
}

right.onclick = function () {
    moveBall("right")
}

left.onclick = function () {
    moveBall("left")
}