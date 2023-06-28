const SongsManager = function() {
    var _songs = new Array()

    const urlPart = "https://www.youtube.com/watch?v="

    const add = function(name, url) {
        const song = {}
        song.id = url.substring(url.indexOf("=") + 1)
        song.title = name
        _songs.push(song)
    }

    const get = function(name) {
        var result = _songs.find(item => item.title === name);
        console.log(urlPart + result.id)
    }

    return {
        addSong: add,
        getSong: get
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ