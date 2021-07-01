import styles from './PostsWall.module.css'
import { Post } from '../Post/Post'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { requestPosts } from '../../redux/postsSlice'

export const PostsWall: React.FC = () => {
    const posts = useAppSelector(state => state.posts.posts)
    const stopUpload = useAppSelector(state => state.posts.stopUpload)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!posts.length) dispatch(requestPosts(5))
    })

    useEffect(() => {
        let timerId: NodeJS.Timeout
        if (stopUpload) timerId = setInterval(() => requestPosts(1), 3000)
        return () => {
            clearInterval(timerId)
        }

    }, [stopUpload])


    return (
        <div className={styles.postsWall}>
            <ShowNewPosts />
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

const ShowNewPosts = () => {
    return (
        <div className={styles.showNewPosts}>
            Show <b>1</b> new posts
        </div>
    )
}