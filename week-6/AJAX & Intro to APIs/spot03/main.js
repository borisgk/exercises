const useData = function (data) {
  console.log(data)
}

const showError = function(xhr, text, error) {
  console.log(xhr, text, error)
}

const fetch = function() {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: useData,
    error: showError
  })
}