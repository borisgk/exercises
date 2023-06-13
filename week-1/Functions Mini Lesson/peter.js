const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}


const getLower = function(str){
    return String(str).toLowerCase()
}

const removeChars = function(str){
    let editString = String(str)
    for( let ch of specialChars){
        editString = editString.replaceAll(ch, '')
    }
    return editString
}

const saveInfo = function(str){
    for(let word of String(str).split(" ")){
        if (wordCounts[word] == undefined){
            wordCounts[word] = 1
        }else{
            wordCounts[word] ++
        } 
    }
}

const getWordCount = function(story){
    let storyToLower = getLower(story)
    let removedChars = removeChars(storyToLower)
    saveInfo(removedChars)
}


getWordCount(story)
console.log(wordCounts)