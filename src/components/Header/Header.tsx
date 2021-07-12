import styles from './Header.module.css'
import userAvatar from './assets/user.jpg'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setSignInIsOpen, setSignUpIsOpen } from '../../redux/modalsSlice'
import React from 'react'

export const Header: React.FC<{}> = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
        <header className={styles.header}>
            <div className={styles.fixedHeader}>
                <div className={styles.headerContainer}>
                    <div className={styles.logo}>LazyFeed</div>
                    <div className={styles.rightPanel}>
                        {isAuth ? <UserBar /> : <AuthBar />}
                    </div>
                </div>
            </div>
        </header>
    )
}

const UserBar: React.FC<{}> = () => {
    const {firstname, lastname} = useAppSelector(state => state.auth)

    return (
        <div className={styles.userBar}>
            <ul className={styles.userInfo}>
                <li>{firstname}</li>
                <li>{lastname}</li>
            </ul>
            <img className={styles.userAvatar} src={userAvatar} alt="user avatar" />
        </div>
    )
}

const AuthBar: React.FC<{}> = () => {
    const dispatch = useAppDispatch()

    const onSignUpClick = () => {
        dispatch(setSignUpIsOpen(true))
    }

    const onSignInClick = () => {
        dispatch(setSignInIsOpen(true))
    }

    return (
        <div className={styles.authBar}>
            <button className={styles.authBtn} onClick={onSignInClick}>Log In</button>
            <button className={styles.authBtn} onClick={onSignUpClick}>Sign Up</button>
        </div>
    )
}