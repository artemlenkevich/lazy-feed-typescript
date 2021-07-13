import styles from './Post.module.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Comments } from './Comments/Comments'
import { useAppDispatch } from '../../../redux/hooks'
import { removePost } from '../../../redux/postsSlice'

interface Ipost {
    firstname: string
    lastname: string
    avatar: string
    contentImage: string
    postId: number
}

export const Post: React.FC<Ipost> = ({ postId, firstname, lastname, avatar, contentImage }) => {
    let [likes, setLikes] = useState(getRandomCeilInt(0, 1000))
    let [likedByMe, setLikedByMe] = useState(false)
    let [views, setViews] = useState(getRandomCeilInt(likes, likes * 10))

    let [commentsIsShow, setShowComments] = useState(false)
    let [comments, setComment] = useState<Array<string>>([])

    const dispatch = useAppDispatch()

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

    const onCommentsIconClick = () => {
        if (comments.length) {
            setShowComments(!commentsIsShow)
        }
    }

    const onCloseBtnClick = () => {
        dispatch(removePost(postId))
    }

    useEffect(() => {
        const LikesTimerId = setInterval(() => setLikes((likes) => ++likes), getRandomCeilInt(1000, 3000))
        const ViewsTimerId = setInterval(() => setViews((views) => ++views), getRandomCeilInt(1000, 2000))

        return () => {
            clearInterval(LikesTimerId)
            clearInterval(ViewsTimerId)
        }
    }, [])

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <img className={styles.postUserPhoto} src={avatar} alt="avatar" />
                <div className={styles.postInfo}>
                    <div className={styles.postCreatorName}>{firstname + ' ' + lastname}</div>
                    <div className={styles.postCreationDate}>14 Jun at 16:46:36</div>
                </div>
                <span className={styles.closeBtn} onClick={onCloseBtnClick}>
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
                <div className={styles.postActivity} onClick={onCommentsIconClick}>
                    <div className={styles.postActivityIcon}>
                        <i className='far fa-comment-alt'></i>
                    </div>
                    <div className={styles.commentCount}>{comments.length}</div>
                </div>
                <div className={styles.postActivity}>
                    <div className={styles.postActivityIcon}>
                        <i className='far fa-eye'></i>
                    </div>
                    <div className={styles.viewsCount}>{views}</div>
                </div>
            </div>
            <Comments commentsIsShow={commentsIsShow} setShowComments={setShowComments} comments={comments} setComment={setComment} />
        </div>
    )
}