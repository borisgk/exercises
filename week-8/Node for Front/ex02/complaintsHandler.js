import { EMOTIONS, FINANCE, WEATHER } from "./consts.js";

const handleComplaint = function(complaint) {
    switch (complaint.type) {
        case FINANCE:
            console.log("Money doesn’t grow on trees, you know.")
            break
        case WEATHER:
            console.log("It is the way of nature. Not much to be done.")
            break
        case EMOTIONS:
            console.log("It’ll pass, as all things do, with time.")
    }
}

export default handleComplaint