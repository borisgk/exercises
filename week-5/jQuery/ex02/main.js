$("body").append('<div><input id="newname" type="text"><button>Add Human</button></div>')
$("#newname").attr("placeholder", "Human Name")

$("button").click(function (e) { 
    e.preventDefault();
    $("#names").append(`<li>${$("#newname").val()}</li>`)
    $("#newname").val("")
})

$("#names").on("click", "li", function() {
    $(this).remove()
})