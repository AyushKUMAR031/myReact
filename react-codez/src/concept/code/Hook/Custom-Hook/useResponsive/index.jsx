import { useLayoutEffect } from "react";
import { useState } from "react";


export default function UseResponsive() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })

    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    //Unlike `useEffect`, which runs after the DOM setup, it runs before the DOM is updated.
    useLayoutEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}