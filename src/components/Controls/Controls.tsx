import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setAutoUpdate, setAutoUpload } from '../../redux/postsSlice'
import styles from './Controls.module.css'

interface IControl {
    controlName: string
    isActive: boolean
    onControlClick: () => void
}

interface IToggle {
    isActive: boolean
}

export const Controls: React.FC = () => {
    const dispatch = useAppDispatch()
    const autoUpload = useAppSelector(state => state.posts.autoUpload)
    const autoUpdate = useAppSelector(state => state.posts.autoUpdate)

    const onAutoUploadClick = () => {
        dispatch(setAutoUpload(!autoUpload))
    }

    const onAutoUpdateClick = () => {
        dispatch(setAutoUpdate(!autoUpdate))
    }

    return (
        <div className={styles.controls}>
            <div className={styles.fixedControls}>
                <h4 className={styles.controlsTitle}>Feed Controls</h4>
                <div className={styles.feedControls}>
                    <Control controlName='Autoupload' isActive={autoUpload} onControlClick={onAutoUploadClick} />
                    <Control controlName='Autoupdate' isActive={autoUpdate} onControlClick={onAutoUpdateClick}/>
                </div>
            </div>
        </div>
    )
}

const Control: React.FC<IControl> = ({controlName, isActive, onControlClick}) => {

    return (
        <div className={styles.control} onClick={onControlClick}>
            <div className={styles.controlLabel}>{controlName}</div>
            <Toggle isActive ={isActive} />
        </div>
    )
}

const Toggle: React.FC<IToggle> = ({isActive}) => {
    const roundClassNames = isActive ? styles.round + ' ' + styles.roundSwitchedOn : styles.round;

    return (
        <div className={styles.toggle}>
            <div className={roundClassNames} />
        </div>
    )
}