const posts = [
    {
        name: "First Post",
        text: "Some text in the first post will be about the first post."
    },
    {
        name: "Second Post",
        text: "Some text in the first post will be about the second post."
    },
    {
        name: "Third Post",
        text: "Some text in the first post will be about the third post."
    },
    {
        name: "Fourth Post",
        text: "Some text in the first post will be about the fourth post."
    },
]

const render = function () {
    $(".posts").empty()
    for (post of posts) {
        postElement = $(`<div class="post"><span class="name">${post.name}: </span><span class="text">${post.text}</span></div>`)
        $(".posts").append(postElement)
    }
}

render()

$("#submit").on("click", function () {
    let newName = $("#in1").val()
    let newText = $("#in2").val()
    if (newName && newText) {
        posts.push({
            name: newName,
            text: newText
        })
        render()
    }
})