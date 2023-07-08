const useData = function (data) {
  for (item of data.items) {
    if (item.volumeInfo.hasOwnProperty("authors")) {
      author = item.volumeInfo.authors[0]
    } else {
      author = "None"
    }
    $(".data").append($(`<p>${item.volumeInfo.title}</p><p>${author}</p><p>${item.volumeInfo.industryIdentifiers[0].identifier}</p><hr>`))
  }
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