import styles from './Controls.module.css'

interface IControls {
    stopUpload: boolean
    setStopUpload: (isEnable: boolean) => void
    autoUpdate: boolean
    setAutoUpdate: (isEnable: boolean) => void
}

interface IControl {
    controlName: string
    isActive: boolean
    onControlClick: () => void
}

interface IToggle {
    isActive: boolean
}

export const Controls: React.FC<IControls> = ({stopUpload, setStopUpload, autoUpdate, setAutoUpdate}) => {
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