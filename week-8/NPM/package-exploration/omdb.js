import urllib from 'urllib'

const key = "9430e057"

const title = "The Lion King"

const requestURL = `https://www.omdbapi.com/?apikey=${key}&t=${title}`

const getMovieInfo = async function() {
    let result = await urllib.request(requestURL)
    let jsonData = await JSON.parse(result.data.toString())
    console.log(jsonData.Released)
}

getMovieInfo()