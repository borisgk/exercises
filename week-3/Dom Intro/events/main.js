const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const clickColor = function () {
    box.style.backgroundColor = "#8e44ad"
    box.innerHTML = "I am clicked!"
}

const addListItem = function () {
    let newItem = document.createElement("li")
    newItem.innerHTML = "New item of the list"
    const list = document.getElementById("list")
    list.appendChild(newItem)
}