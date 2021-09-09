import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setSignInIsOpen, setSignUpIsOpen } from '../../redux/modalsSlice'
import styles from './Auth.module.css'
import { SignIn } from './SignIn/SignIn'
import { SignUp } from './SignUp/SignUp'

export let Auth: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const signUpIsOpen = useAppSelector(state => state.modals.signUp.isOpen)
    const signInIsOpen = useAppSelector(state => state.modals.signIn.isOpen)

    const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        
        if (e.target === e.currentTarget) {
            dispatch(setSignUpIsOpen(false))
            dispatch(setSignInIsOpen(false))
        }
    }
    
    if (signUpIsOpen || signInIsOpen) {
        return (
            <div className={styles.overlay} onClick={onOverlayClick}>
                {signUpIsOpen ? <SignUp /> : signInIsOpen ? <SignIn/> : null}
            </div>
        )
    } else {
        return null
    }
}