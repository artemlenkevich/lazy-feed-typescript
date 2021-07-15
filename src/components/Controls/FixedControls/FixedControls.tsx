import styles from './FixedControls.module.css'

export const FixedControls: React.FC<{}> = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.fixedControls}>
                {children}
            </div>
        </div>
    )
}