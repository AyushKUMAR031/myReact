import styles from "./popup.module.css";

export default function PopupModal({ id, header, body, footer, onClose }) {

    return (
        <div id={id || 'Modal'} className={styles.model}>
            <h1>Popup Model</h1>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2>{header || 'This is Demo Header'}</h2>
                </div>
                <div className={styles.body}>
                    {
                        body ? body :
                            <div>This is a Demo Body</div>
                    }
                </div>
                <div className={styles.footer}>
                    <h2>{footer ? footer : 'This is Demo Footer'}</h2>
                </div>
            </div>
                <button onClick={onClose} className={styles.closeIcon}>Close</button>
        </div>
    )
}

