import { useEffect, useState, useCallback } from "react";

export default function UseFetch(url, options = {}) {
    const [data, setData] = useState(null); // For storing the fetched Data.
    const [waiting, setWaiting] = useState(false); // For the Time Interval of Loading
    const [error, setError] = useState(null); // For Error Handling

    // Fetching Data
    const fetchData = useCallback(async () => {
        setWaiting(true);
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText); //Throwing Error if fetching fails
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (e) {
            setError(e);
            console.log(e);
        } finally {
            setWaiting(false);
        }
    }, [url]);

    // useEffect(() => {
    //     fetchData();
    // }, [fetchData]); 
    //If we do not use UseEffect Data will not be Mount on Page Reload.

    return { data, error, waiting, refetch: fetchData };
}
