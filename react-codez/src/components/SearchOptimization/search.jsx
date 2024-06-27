import { useEffect, useState } from "react";
import Suggestion from "./suggestion";
import style from "./style.module.css";

export default function SearchOptimize() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [showDropDown, setDropDown] = useState(false);
    const [filterSearch, setFilterSearch] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase()
        setSearch(query);
        if (query.length > 1) {
            const filterData = users && users.length ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFilterSearch(filterData);
            setDropDown(true)
        } else {
            setDropDown(false)
        }
    }

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users?limit=100');
            const data = await response.json();
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(userItem => userItem.firstName));
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    function handleClick(event) {
        setSearch(event.target.innerText);
        setDropDown(false);
        setFilterSearch([]);
    }

    return (
        <>
            <h1>Search Optimization</h1>
            <div className={style.mainWrapper}>
                {
                    loading ? (<p style={{ color: "whiteSmoke", fontSize: "36px" }}>Loading...</p>)
                        : (
                            <input type="text" value={search} name="Search-User" placeholder="Search-User here..."
                                onChange={handleChange} />
                        )}
                {
                    showDropDown && <Suggestion handleClick={handleClick} data={filterSearch} />
                }
            </div>
        </>
    )
}