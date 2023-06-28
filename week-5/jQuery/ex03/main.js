$("body").append(`<div><div class="box"></div><div class="box"></div></div>`)

$(".box").hover(function () {
        $(".box").css("background-color", "#8e44ad")
        $(this).css("background-color", "orange")
})