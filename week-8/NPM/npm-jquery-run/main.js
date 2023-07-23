$("div").on("click", async function () {
    $(this).css("background-color", "#f39c12")
    try {
        let result = await $.get("http://data.nba.net/10s/prod/v1/2016/players.json")
        console.log(result)
    } catch(err) {
        console.log(err)
    }
})