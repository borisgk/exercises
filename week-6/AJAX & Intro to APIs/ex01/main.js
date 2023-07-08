const useData = function (data) {
  $(".data").append($(`<p>${data.items[0].volumeInfo.title}</p>`))
  $(".data").append($(`<p>${data.items[0].volumeInfo.description}</p>`))
}

const showError = function(xhr, text, error) {
  console.log(xhr, text, error)
}

const fetchData = function(isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: useData,
    error: showError
  })
}

const fetch = function () {
  let isbn = $("#isbn").val()
  fetchData(isbn)
}