import styles from './Post.module.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { setInterval } from 'timers'

interface Ipost {
    firstname: string
    lastname: string
    avatar: string
    contentImage: string
}

export const Post: React.FC<Ipost>= ({firstname, lastname, avatar, contentImage}) => {
    let [likes, setLikes] = useState(getRandomCeilInt(0, 1000))
    let [likedByMe, setLikedByMe] = useState(false)

    let [views, setViews] = useState(getRandomCeilInt(likes, likes * 10))

    function getRandomCeilInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Include max and min
      }
    
    const onLikeIconClick = () => {
        if (!likedByMe) {
            setLikes(++likes)
        } else {
            setLikes(--likes)
        }
        setLikedByMe(!likedByMe)
    }

    useEffect(() => {
        setInterval(() => setLikes((likes) => ++likes), getRandomCeilInt(1000, 3000))
        setInterval(() => setViews((views) => ++views), getRandomCeilInt(1000, 2000))
    }, [])

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <img className={styles.postUserPhoto} src={avatar} alt="avatar" />
                <div className={styles.postInfo}>
                    <div className={styles.postCreatorName}>{firstname + ' ' + lastname}</div>
                    <div className={styles.postCreationDate}>14 Jun at 16:46:36</div>
                </div>
                <span className={styles.closeBtn}>
                    <i className='far fa-window-close' />
                </span>
            </div>
            <div className={styles.postContent}>
                <img className={styles.postContentImage} src={contentImage} alt="content" />
            </div>
            <div className={styles.postActivities}>
                <div className={styles.postActivity} onClick={onLikeIconClick}>
                    <div className={styles.postActivityIcon}>
                        <i className={likedByMe ? 'fas fa-heart' : 'far fa-heart'}></i>
                    </div>
                    <div className={styles.likeCount}>{likes}</div>
                </div>
                <div className={styles.postActivity}>
                    <div className={styles.postActivityIcon}>
                        <i className='far fa-comment-alt'></i>
                    </div>
                    <div className={styles.commentCount}>0</div>
                </div>
                <div className={styles.postActivity}>
                    <div className={styles.postActivityIcon}>
                        <i className='far fa-eye'></i>
                    </div>
                    <div className={styles.viewsCount}>{views}</div>
                </div>
            </div>
        </div>
    )
}