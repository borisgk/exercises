const displayDescription = function(data) {
    console.log(data.items[0].volumeInfo.description)    
}

$.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", displayDescription)