import { useState } from "react";
import PopupModal from "./popup";
import styles from "./popup.module.css";

export default function PopupTest() {
    const [showPopup, setShowPopup] = useState(false);

    function handleTogglePopup() {
        setShowPopup(!showPopup);
    }

    function handleOnClose(){
        setShowPopup(false);
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={handleTogglePopup} className={styles.btn}>Open Popup</button>
            {showPopup && (
                <PopupModal onClose={handleOnClose}
                    id="myPopup"
                    header="Custom Header"
                    body={<p>Custom Body Content</p>}
                    footer="Custom Footer"
                />
            )}
        </div>
    );
}
