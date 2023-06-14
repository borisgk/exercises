let container = document.getElementById("container")

for (i=0; i<400; i++) {
    let box = document.createElement("div")
    box.setAttribute("id", "i")
    box.setAttribute("class", "box")
    box.style.backgroundColor = randomRgbColor()
    box.innerHTML = i
    box.onmouseenter = function() {
        box.style.backgroundColor = randomRgbColor()
    }
    container.appendChild(box)  
}

function randomRgbColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}

