import styles from './PostsWall.module.css'
import { Post } from './Post/Post'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { requestPosts, showHiddenPosts } from '../../redux/postsSlice'
import { MouseEventHandler } from 'react'

interface IShowNewPosts {
    hiddenPostsLength: number
    onShowNewPostsClick: MouseEventHandler
}

export const PostsWall: React.FC = () => {
    const posts = useAppSelector(state => state.posts.posts)
    const hiddenPosts = useAppSelector(state => state.posts.hiddenPosts)
    const autoUpload = useAppSelector(state => state.posts.autoUpload)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(requestPosts(1))
    }, [dispatch])

    useEffect(() => {
        let timerId: NodeJS.Timeout
        if (autoUpload) timerId = setInterval(() => dispatch(requestPosts(1)), 5000)
        return () => {
            clearInterval(timerId)
        }
    }, [autoUpload, dispatch])

    const onShowNewPostsClick = () => {
        dispatch(showHiddenPosts())
    }


    return (
        <div className={styles.postsWall}>
            <ShowNewPosts hiddenPostsLength={hiddenPosts.length} onShowNewPostsClick={onShowNewPostsClick}/>
            {
                posts.map(post => <Post key={post.id}
                                        postId={post.id}
                                        firstname={post.author.firstname}
                                        lastname={post.author.lastname}
                                        avatar={post.author.avatarUrl}
                                        contentImage={post.contentImageUrl}/>)
            }
        </div>
    )
}

const ShowNewPosts: React.FC<IShowNewPosts> = ({hiddenPostsLength, onShowNewPostsClick}) => {
    if (hiddenPostsLength) {
        return (
            <div className={styles.showNewPosts} onClick={onShowNewPostsClick}>
                Show <b>{hiddenPostsLength}</b> new posts
            </div>
        )
    } else {
        return null
    }
}