const story = `In the beginning there was light. Then there were wolves. 
Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, 
the fire caused one heck of a lot of damage.`
const specialChars = [",", ".", "'", '"',"?", "!", ";", "\n"]
const wordCounts = {}

console.log(story)

function cleanText(str) {
    str = str.toLowerCase()
    for (char of specialChars) {
        str = str.split(char).join(" ")
    }
    return str
}

function countWord(str) {
    if (str !== "") {
        if (!wordCounts[str]) {
            wordCounts[str] = 1
        } else {
            wordCounts[str] += 1
        }
    }
}

function getWordCounts(str) {
    let text = cleanText(str)
    let words = text.split(" ")
    for (word of words) {
        countWord(word)
    }
}

getWordCounts(story)
console.table(wordCounts)