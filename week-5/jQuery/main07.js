const showInput = function () {
    alert($("#my-input").val())
}

$("button").on("click", showInput)