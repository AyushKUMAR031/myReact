import { createContext, useEffect, useState } from "react";
import DataCall from "../data";


export const FlagsContext = createContext(null);

export default function FlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFlags() {
        try {
            // Main Calling of Feature Flags Data.
            setLoading(true);
            const response = await DataCall();
            console.log(response);
            setEnabledFlags(response);
        } catch (e) {
            console.log(e);
            throw new Error(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFlags();
    }, [])

    return (
        <FlagsContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FlagsContext.Provider>
    )
}