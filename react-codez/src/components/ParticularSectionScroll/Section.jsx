import { useRef } from "react";


export default function ParticularSectionScroll() {

    const ref = useRef();
    const data = [
        {
            label: "First Card",
            style: {
                width: "100%",
                height: "500px",
                background: "red",
            },
        },
        {
            label: "Second Card",
            style: {
                width: "100%",
                height: "500px",
                background: "grey",
            },
        },
        {
            label: "Third Card",
            style: {
                width: "100%",
                height: "500px",
                background: "blue",
            },
        },
        {
            label: "Fourth Card",
            style: {
                width: "100%",
                height: "500px",
                background: "green",
            },
        },
        {
            label: "Fifth Card",
            style: {
                width: "100%",
                height: "500px",
                background: "orange",
            },
        },
    ];

    function handleScrollToSection() {
        // We can also Use This.
        // ref.current.scrollIntoView({ behavior: "smooth" });

        let pos = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    }

    return (
        <div>
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToSection}>Click To Scroll</button>
            {
                data.map((dataItem, index) => (
                    <div ref={index === 3 ? ref : null} style={dataItem.style}>
                        <h3>{dataItem.label}</h3>
                    </div>
                ))
            }
        </div>
    );
}