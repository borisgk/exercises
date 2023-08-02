import React, {useState} from 'react'

function Exercise1 () {

    const [images, setImages] = useState (
        {
            images: [
              "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
              "https://m.media-amazon.com/images/I/51T3025eGcL._AC_UF1000,1000_QL80_.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
            currentImg: 0
        }
    )

    function shiftImageBack() {
        if (images.currentImg > 0) {
            let newImages = {...images}
            newImages.currentImg--
            setImages(newImages)
        }
    }

    function shiftImageForward() {
        if (images.currentImg < 2) {
            let newImages = {...images}
            newImages.currentImg++
            setImages(newImages)
        }
    }

    return (
        <div>
            <img src={images.images[images.currentImg]} alt="That can be changed." height="200"></img>
            <div>
                <button onClick={shiftImageBack}>Back</button>
                <button onClick={shiftImageForward}>Forward</button>
            </div>
        </div>
    )


}

export default Exercise1