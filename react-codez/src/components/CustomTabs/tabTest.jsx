import Tabs from "./tab";
import styles from "./tab.module.css";

function Tab1Content() {
    return (
        <div className={styles.tabContent}>
            <h2>Tab 1 Content</h2>
            <p>kaguya Otsutsuki</p>
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/The-Godly-Kaguya-for-the-entry-Divine-Powers.jpg" 
            alt="Placeholder for Tab 1" />
        </div>
    );
}

function Tab2Content() {
    return (
        <div className={styles.tabContent}>
            <h2>Tab 2 Content</h2>
            <p>Sage Of Six Path (Hagoromo Otsutski)</p>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-eb8a8f7ce8e5373289db9a055b64625d-lq" 
            alt="Placeholder for Tab 2" />
        </div>
    );
}

function Tab3Content() {
    return (
        <div className={styles.tabContent}>
            <h2>Tab 3 Content</h2>
            <p>Naruto Uzumaki</p>
            <img src="https://wallpapers.com/images/featured/naruto-sage-of-six-paths-4geux1uiu72ek9bt.jpg" alt="Placeholder for Tab 3" />
        </div>
    );
}

function Tab4Content() {
    return (
        <div className={styles.tabContent}>
            <h2>Tab 4 Content</h2>
            <p>Uchiha Sasuke</p>
            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Feature-Sasuke-Strongest-Ninja.jpg" alt="Placeholder for Tab 3" />
        </div>
    );
}


export default function TabTest() {

    const tabs = [
        {
            label: "Tab 1",
            content: <Tab1Content />
        },
        {
            label: "Tab 2",
            content: <Tab2Content />
        },
        {
            label: "Tab 3",
            content: <Tab3Content />
        },
        {
            label: "Tab 4",
            content: <Tab4Content />
        }
    ];

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return (
        <Tabs tabsContent={tabs} onChange={handleChange} />
    );
}
