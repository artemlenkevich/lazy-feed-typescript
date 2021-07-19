import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setControlsIsOpen } from '../../../redux/modalsSlice'
import { Controls } from '../Controls'
import styles from './LeftSideControls.module.css'

export const LeftSideControls: React.FC<{}> = () => {
    const isOpen = useAppSelector(state => state.modals.controls.isOpen)
    const dispatch = useAppDispatch()
    
    const overlayStyles = isOpen ? styles.overlay + ' ' + styles.open : styles.overlay

    const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
            dispatch(setControlsIsOpen())
        }
    }

    return (
        <div className={overlayStyles} onClick={onOverlayClick}>
            <div className={styles.wrapper}>
                <Controls />
            </div>
        </div>
    )
}