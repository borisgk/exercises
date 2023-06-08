
// TODO: create separate functions for individual operations
// TODO: implement boundary checks with replacement

const splice = function(arr, start, count){
    let numArgs = arguments.length
    let deleted = []
    if (numArgs == 3) {
        // Deleting elements from start to start + count
        let s1 = arr.slice(0, start)
        let s2 = arr.slice(start + count, arr.length)
        deleted.push(...arr.slice(start, start + count))
        arr.length = 0 // empty the array
        arr.push(...s1, ...s2)
        return deleted
    } else if (numArgs == 2) {
        // Deleting from start to end
        let s1 = arr.slice(0, start)
        deleted.push(...arr.slice(start, arr.length))
        arr.length = 0
        arr.push(...s1)
        return deleted
    } else if (numArgs > 3) {
        if (count == 0) {
            // Not deleting, inserting
            let s1 = arr.slice(0, start)
            for (i = 3; i < numArgs; i++) {
                s1.push(arguments[i])
            }
            let s2 = arr.slice(start, arr.length)
            arr.length = 0
            arr.push(...s1, ...s2)
            return deleted
        } else if (count > 0) {
            // Replacing
            for (i = 3; i < numArgs; i++) {
                arr[start + i - 3] = arguments[i]
                return deleted
            }
        }
    }
}

















// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 