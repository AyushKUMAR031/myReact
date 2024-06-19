import { useEffect } from "react";
import { useState } from "react";
import styles from "./style.module.css";
import User from "./User";

export default function GithubProfileFinder() {
    const [username, setUsername] = useState('AyushKUMAR031');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    function handleSubmit() {
        fetchGithubProfileUserData();
    }

    async function fetchGithubProfileUserData() {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            console.log(data);
            if (data) {
                setUserData(data);
                setUsername('');
            }
        } catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGithubProfileUserData()
    }, []);

    if (loading) {
        return <h2>Loading Profile... Please Wait</h2>
    }

    return (
        <div className={styles.wrapper}>
            <h1>Github Profile Finder</h1>
            <div className={styles.inputWrapper}>
                <input type="text" name="search-by-UserName" placeholder="Enter Github Username" value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userData !== null ? <User user={userData} /> : null}
        </div>
    )
}


// Primary rate limit for unauthenticated users
// The primary rate limit for unauthenticated requests is 60 requests per hour.
// Primary rate limit for authenticated users
//All of these requests count towards your personal rate limit of 5,000 requests per hour.