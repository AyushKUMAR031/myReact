import { useState } from "react";
import styles from "./tab.module.css";

export default function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
        <div className={styles.mainWrapper}>
            <h1>Most PowerFul Character in Naruto</h1>
            <div className={styles.heading}>
                {
                    tabsContent.map((tabItem, index) => 
                     <div className={`${styles.tab} ${currentTabIndex === index ? styles.active : ''}`} onClick={() => handleClick(index)} key={tabItem.label}>
                        <span >{tabItem.label}</span>
                    </div>)
                }
            </div>
            <div className={styles.content}>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    );
}
