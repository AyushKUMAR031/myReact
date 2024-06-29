import styles from "../style.module.css";
export default function Search({search, setSearch, handleSearch}) {
    return (
        <div className={styles.searchEngine}>
            <input type="text" placeholder="Enter the City Name..."
            name="search" value={search} onChange={(event) => setSearch(event.target.value)}/>

            <button onClick={handleSearch}>Search Weather</button>
        </div>
    )
}