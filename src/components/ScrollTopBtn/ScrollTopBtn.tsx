import { useEffect } from 'react'
import { useState } from 'react'
import styles from './ScrollTopBtn.module.css'

export const ScrollTopBtn: React.FC<{}> = () => {
    let [isShow, showButton] = useState(false)

    const onClick = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        const onScroll = () => showButton(window.pageYOffset > 100)
        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        isShow ?
        <div className={styles.scrollTopBtn} onClick={onClick}>
            <i className='far fa-caret-square-up'></i>
        </div> 
        : null
    )
}