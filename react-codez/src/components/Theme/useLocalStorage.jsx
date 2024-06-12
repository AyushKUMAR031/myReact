import { useEffect, useState } from "react";


export default function useLocalStorage(key, defaultvalue) {
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultvalue));
        } catch (e) {
            console.log(e);
            currentValue = defaultvalue;
        }

        return currentValue;
    });


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}