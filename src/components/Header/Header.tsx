import styles from './Header.module.css'
import userAvatar from './assets/user.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.fixedHeader}>
                <div className={styles.headerContainer}>
                    <div className={styles.logo}>LazyFeed</div>
                    <div className={styles.rightPanel}>
                        <UserBar />
                        <AuthBar />
                    </div>
                </div>
            </div>
        </header>
    )
}

const UserBar = () => {
    return (
        <div className={styles.userBar}>
            <ul className={styles.userInfo}>
                <li>Firstname</li>
                <li>Lastname</li>
            </ul>
            <img className={styles.userAvatar} src={userAvatar} alt="user avatar" />
        </div>
    )
}

const AuthBar = () => {
    return (
        <div className={styles.authBar}>
            <button className={styles.authBtn}>Log In</button>
            <button className={styles.authBtn}>Sign Up</button>
        </div>
    )
}