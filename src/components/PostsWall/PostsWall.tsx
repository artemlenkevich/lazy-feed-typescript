import styles from './PostsWall.module.css'
import { Post } from '../Post/Post'
import React from 'react'
import { PostType } from '../../redux/postsReducer'

interface IPostsWall {
    posts: Array<PostType>
    requestPosts: (quantity: number) => void
}

export const PostsWall: React.FC<IPostsWall> = ({ posts, requestPosts }) => {

    return (
        <div className={styles.postsWall}>
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