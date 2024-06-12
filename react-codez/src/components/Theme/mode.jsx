import useLocalStorage from "./useLocalStorage"
import sheet from "./style.module.css";

export default function LightDarkMode(){

    const [theme, setTheme] = useLocalStorage('theme',"dark");

    function handleToggleTheme(){
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme);

    return (
        <div className={sheet.main} data-theme={theme}> {/*based on theme passed we change the styling*/}
            <div className={sheet.modeChange}>
                <h1>React Codez</h1>
                <p>Press below to change into  <b>{theme === "light" ? "dark" : "light"} Theme. </b> </p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}