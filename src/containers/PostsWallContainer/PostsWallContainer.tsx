import React from "react"
import { useEffect } from "react"
import { connect } from "react-redux"
import { PostsWall } from "../../components/PostsWall/PostsWall"
import { PostType, requestPosts } from "../../redux/postsSlice"
import { RootState } from "../../redux/store"

interface IPostsWallContainer {
    posts: Array<PostType>
    stopUpload: boolean
    requestPosts: (quantity: number) => void
}

let PostsWallContainer: React.FC<IPostsWallContainer> = ({posts, stopUpload, requestPosts}) => {
    useEffect(() => {
        // if (!posts.length) requestPosts(5)
    })

    useEffect(() => {
        let timerId: NodeJS.Timeout
        if (stopUpload) timerId = setInterval(() => requestPosts(1), 3000)
        return () => {
            clearInterval(timerId)
        }

    }, [stopUpload, requestPosts])

    return (
        <PostsWall posts={posts} requestPosts={requestPosts}/>
    )
}

const mapStateToProps = (state: RootState) => ({
    posts: state.posts.posts,
    stopUpload: state.posts.stopUpload
})

export default connect(mapStateToProps, {requestPosts})(PostsWallContainer)
