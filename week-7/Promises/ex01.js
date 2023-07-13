// Using the following random word API
// Make a request to the API and get a random word
// Then use that word to make a request to the Google Books API
// You should request a book whose title has that random word
// For your convenience, here is the URL for this API: https://www.googleapis.com/books/v1/volumes?q=intitle:WORD_HERE
// Nice, you’ve created a random book generator.

// Words API: https://random-word-api.herokuapp.com/word



    fetch("https://random-word-api.herokuapp.com/word")
        
    .then((response) => {
        return(response.json())
    })

    .then((data) => {
        const word = data[0]
        console.log(`The word is: ${word}`)
        
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        
        .then((response) => {
            return(response.json())
        })
        .then((data) => {
            if (data.items) {
                data.items.forEach(p => {console.log(p.volumeInfo.title)})
            }
        })
    })
