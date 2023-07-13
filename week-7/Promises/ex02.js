// Now do the same, except instead of only getting a random book, get a random book and a random GIF based off the word that came back from /randomWords.
// When all of the data you want comes back, display it on the page. It doesn’t have to be anything fancy, you can just add the book title and the GIF directly to the body.
// Now we’re talking.

    const giphyKey = "cbPqK1ONHSY41DQ4YNLDOAkRlxfvjB2a"

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
                data.items.forEach(p => {
                    console.log(p.volumeInfo.title)
                    let dataDIV = document.getElementById("data")
                    let bookTitle = document.createElement("p")
                    bookTitle.innerHTML = p.volumeInfo.title
                    dataDIV.append(bookTitle)
                })
            }

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${word}`)
        .then((response => {
            return(response.json())
        }))
        .then((data) => {
            if(data.data.length > 0) {
                let url = data.data[0].embed_url
                let randomGIF = document.createElement("iframe")
                randomGIF.setAttribute("src", url)
                let dataDIV = document.getElementById("data")
                dataDIV.append(randomGIF)
            }
        })

        })
    })
