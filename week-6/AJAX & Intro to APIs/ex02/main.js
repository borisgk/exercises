const useData = function (data) {
  $(".data").append($(`<p>${data.items[0].volumeInfo.title}</p>`))
  $(".data").append($(`<p>${data.items[0].volumeInfo.description}</p>`))
}

const showError = function(xhr, text, error) {
  console.log(xhr, text, error)
}

const fetchData = function(queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType.toLowerCase()}:${queryValue}`,
    success: useData,
    error: showError
  })
}

const fetch = function () {
  let queryType = $("#querytype").val()
  let queryValue = $("#queryvalue").val()
  fetchData(queryType, queryValue)
}