import styles from './Post.module.css'
import userPhoto from './assets/userPhoto.jpg'
import contentImage from './assets/contentImage.jpg'

export const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <img className={styles.postUserPhoto} src={userPhoto} alt="avatar" />
                <div className={styles.postInfo}>
                    <div className={styles.postCreatorName}>Alex Lesly</div>
                    <div className={styles.postCreationDate}>14 Jun at 16:46:36</div>
                </div>
                <span className={styles.closeBtn}>
                    <i className='far fa-window-close' />
                </span>
            </div>
            <div className={styles.postContent}>
                <img className={styles.postContentImage} src={contentImage} alt="content image" />
            </div>
            <div className={styles.postActivities}>
                <div className={styles.postActivity}>
                    <div className={styles.postActivityIcon}>
                        <i className='far fa-heart'></i>
                    </div>
                    <div className={styles.likeCount}>70</div>
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
                    <div className={styles.viewsCount}>1296</div>
                </div>
            </div>
        </div>
    )
}