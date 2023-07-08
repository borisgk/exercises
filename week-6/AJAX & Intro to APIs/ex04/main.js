const key = "cbPqK1ONHSY41DQ4YNLDOAkRlxfvjB2a"
const query = "cats"

const useData = function (data) {
  let numGIFs = data.data.length
  let index = Math.floor(Math.random() * numGIFs);
  let gifURL = data.data[index].embed_url

  $("#gif").append($(`<iframe src="${gifURL}"></iframe>`))

}


$.ajax({
  type: "GET",
  url: `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}`,
  success: useData
})

