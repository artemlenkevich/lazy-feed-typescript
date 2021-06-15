import React, { useState } from 'react'
import styles from './Controls.module.css'

type ControlProps = {
    controlName: string
}

type ToggleProps = {
    toggleIsOn: boolean
    onControlClick: React.MouseEventHandler
}

export const Controls: React.FC = () => {
    return (
        <div className={styles.controls}>
            <div className={styles.fixedControls}>
                <h4 className={styles.controlsTitle}>Feed Controls</h4>
                <div className={styles.feedControls}>
                    <Control controlName='Stop Upload'/>
                </div>
            </div>
        </div>
    )
}

const Control: React.FC<ControlProps> = ({controlName}) => {
    const [toggleIsOn, setTogglePositionOn] = useState(false);

    const onControlClick = () => {
        setTogglePositionOn(!toggleIsOn)
    }

    return (
        <div className={styles.control}>
            <div className={styles.controlLabel} onClick={onControlClick}>{controlName}</div>
            <Toggle toggleIsOn={toggleIsOn} onControlClick={onControlClick}/>
        </div>
    )
}

const Toggle: React.FC<ToggleProps> = ({toggleIsOn, onControlClick}) => {
    const roundClassNames = toggleIsOn ? styles.round + ' ' + styles.roundSwitchedOn : styles.round;

    return (
        <div className={styles.toggle} onClick={onControlClick}>
            <div className={roundClassNames} />
        </div>
    )
}