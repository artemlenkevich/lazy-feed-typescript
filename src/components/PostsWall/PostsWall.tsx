import styles from './PostsWall.module.css'
import { Post } from '../Post/Post'
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
    const stopUpload = useAppSelector(state => state.posts.stopUpload)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!posts.length) dispatch(requestPosts(5))
    })

    useEffect(() => {
        let timerId: NodeJS.Timeout
        if (!stopUpload) timerId = setInterval(() => dispatch(requestPosts(1)), 5000)
        return () => {
            clearInterval(timerId)
        }

    }, [stopUpload, dispatch])

    const onShowNewPostsClick = () => {
        dispatch(showHiddenPosts())
    }


    return (
        <div className={styles.postsWall}>
            <ShowNewPosts hiddenPostsLength={hiddenPosts.length} onShowNewPostsClick={onShowNewPostsClick}/>
            {
                posts.map(post => <Post key={post.author.id}
                                        firstname={post.author.firstname}
                                        lastname={post.author.lastname}
                                        avatar={post.author.avatarUrl}
                                        contentImage={post.contentImageUrl}/>)
            }
        </div>
    )
}

const ShowNewPosts: React.FC<IShowNewPosts> = ({hiddenPostsLength, onShowNewPostsClick}) => {
    console.log('render')
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