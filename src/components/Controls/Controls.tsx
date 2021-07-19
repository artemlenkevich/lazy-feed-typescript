import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setAutoUpdate, setAutoUpload, setClearOld } from '../../redux/postsSlice'
import styles from './Controls.module.css'

interface IControl {
    controlName: string
    isActive: boolean
    onControlClick: () => void
}

interface IToggle {
    isActive: boolean
}

interface IInfoField {
    name: string
    value: number
}

export const Controls: React.FC = () => {

    return (
            <div className={styles.controls}>
                <FeedControls />
                <AppInfo />
            </div>
    )
}

const FeedControls: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const autoUpload = useAppSelector(state => state.posts.autoUpload)
    const autoUpdate = useAppSelector(state => state.posts.autoUpdate)
    const clearOld = useAppSelector(state => state.posts.clearOld)

    const onAutoUploadClick = () => {
        dispatch(setAutoUpload(!autoUpload))
    }

    const onAutoUpdateClick = () => {
        dispatch(setAutoUpdate(!autoUpdate))
    }

    const onClearOldClick = () => {
        dispatch(setClearOld(!clearOld))
    }

    return (
        <>
            <h4 className={styles.controlsTitle}>Feed Controls</h4>
            <Control controlName='Autoupload' isActive={autoUpload} onControlClick={onAutoUploadClick} />
            <Control controlName='Autoupdate' isActive={autoUpdate} onControlClick={onAutoUpdateClick} />
            <Control controlName='Clear old' isActive={clearOld} onControlClick={onClearOldClick}/>
        </>
    )
}

const Control: React.FC<IControl> = ({ controlName, isActive, onControlClick }) => {
    return (
        <div className={styles.control} onClick={onControlClick}>
            <div className={styles.controlLabel}>{controlName}</div>
            <Toggle isActive={isActive} />
        </div>
    )
}

const Toggle: React.FC<IToggle> = ({ isActive }) => {
    const roundClassNames = isActive ? styles.round + ' ' + styles.roundSwitchedOn : styles.round;

    return (
        <div className={styles.toggle}>
            <div className={roundClassNames} />
        </div>
    )
}

const AppInfo: React.FC<{}> = () => {
    const totalPostsLength = useAppSelector(state => state.posts.posts.length + state.posts.hiddenPosts.length)
    const onScreenPostsLength = useAppSelector(state => state.posts.posts.length)

    return (
        <>
            <h4 className={styles.controlsTitle}>App Info</h4>
            <InfoField name='Total posts' value={totalPostsLength} />
            <InfoField name='On screen' value={onScreenPostsLength} />
            <InfoField name ='Max posts' value={50} />
        </>
    )
}

const InfoField: React.FC<IInfoField> = ({ name, value }) => {
    return (
        <div className={styles.infoField}>
            <span>{name}</span>
            <span>{value}</span>
        </div>
    )
}