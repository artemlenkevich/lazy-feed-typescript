import { useAppSelector } from '../../redux/hooks'
import { setAutoUpdate, setStopUpload } from '../../redux/postsSlice'
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
    const stopUpload = useAppSelector(state => state.posts.stopUpload)
    const autoUpdate = useAppSelector(state => state.posts.autoUpdate)

    const onStopUploadClick = () => {
        setStopUpload(!stopUpload)
    }

    const onAutoUpdateClick = () => {
        setAutoUpdate(!autoUpdate)
    }

    return (
        <div className={styles.controls}>
            <div className={styles.fixedControls}>
                <h4 className={styles.controlsTitle}>Feed Controls</h4>
                <div className={styles.feedControls}>
                    <Control controlName='Stop upload' isActive={stopUpload} onControlClick={onStopUploadClick} />
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