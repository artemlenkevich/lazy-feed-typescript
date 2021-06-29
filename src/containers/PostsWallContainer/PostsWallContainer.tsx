import React from "react"
import { useEffect } from "react"
import { connect } from "react-redux"
import { PostsWall } from "../../components/PostsWall/PostsWall"
import { PostType, requestPosts } from "../../redux/postsReducer"
import { AppStateType } from "../../redux/store"

interface IPostsWallContainer {
    posts: Array<PostType>
    requestPosts: (quantity: number) => void
    autoUpdate: boolean
}

const PostsWallContainer: React.FC<IPostsWallContainer> = ({posts, requestPosts}) => {
    useEffect(() => {
        if (!posts.length) {
            requestPosts(5)
        }/*  else {
            setTimeout(() => requestPosts(1), 5000)
        } */
    })
    return (
        <PostsWall posts={posts} requestPosts={requestPosts}/>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    posts: state.posts.posts,
    autoUpdate: state.posts.autoupdate
})

export default connect(mapStateToProps, {requestPosts})(PostsWallContainer)