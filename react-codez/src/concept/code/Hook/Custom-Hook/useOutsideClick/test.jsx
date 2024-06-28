import { useRef, useState } from "react"
import UseOutsideClick from ".";


export default function UseOutsideClickTest() {
    const [showContent, setContent] = useState(false);
    const ref = useRef();
    UseOutsideClick(ref, () => setContent(false));

    const iframeStyle = {
        borderRadius: '15px'
    };

    const containerStyle = {
        maxWidth: '600px', 
        margin: 'auto',
        borderRadius: '5px',
        overflow: 'hidden',
        position: 'relative',
    };
    return (
        <>
            <h1>UseOutsideClick Hook</h1>
            <div style={containerStyle}>
                {
                    showContent ?
                        <div ref={ref} >
                            <h2>Quality Content</h2>
                            <iframe width="560" height="315"
                                style={iframeStyle}
                                src="https://www.youtube.com/embed/iZVhZpXVczU?si=SKNJBFMNIHihoOuR"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                            </iframe>
                            <p>Click Outside To Close</p>
                        </div>
                        : <button onClick={() => setContent(true)}>Click Me To See Content</button>
                }
            </div>
        </>
    )
}