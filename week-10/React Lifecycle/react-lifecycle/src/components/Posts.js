import React, {useState, useEffect} from "react"
import getPosts from "./PostsData"
import Post from "./Post"
import MobilePost from "./MobilePost"

function Posts() {

    const mobileThreshold = 768
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileThreshold)


    const numPosts = 10

    let [myPosts, setMyPosts] = useState([])

    
    useEffect(() => {
        getPosts(numPosts).then((posts) => {
            setMyPosts(posts)
        })
    }, [])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < mobileThreshold && !isMobile) {
                setIsMobile(true)
            }
            if (window.innerWidth > mobileThreshold && isMobile) {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)

        return() => window.removeEventListener('resize', handleResize)
    })
    

    return (
        <div className="posts">
            {myPosts.map((p) => isMobile ? <MobilePost title={p.title} body={p.body} /> : <Post title={p.title} body={p.body} />)}
        </div>
    )
}

export default Posts