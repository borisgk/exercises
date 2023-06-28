const StringFormatter = function() {

    function capitalizeFirst(str) {
        return str[0].toUpperCase() + str.toLowerCase().slice(1)
    }

    function toSkewerCase(str) {
        return str.replace(" ", "-")
    }

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}



const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box