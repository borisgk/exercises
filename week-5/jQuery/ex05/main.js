$(".item").click(function (e) { 
        e.preventDefault()
        let data = $(this).data()
        if (data.instock) {
                $("#cart").append(`<div class="cart-item">${$(this).text()}</div>`)
        }
})