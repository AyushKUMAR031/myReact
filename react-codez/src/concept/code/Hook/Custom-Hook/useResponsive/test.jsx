import UseResponsive from "."

export default function UseResponsiveTest() {
    const windowSize = UseResponsive();
    const { width, height } = windowSize;
    const styles = {
        container: {
            padding: "20px",
            fontFamily: "Arial, sans-serif",
        },
        navbar: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#333",
            padding: "10px",
            color: "#fff",
            fontSize: width > 600 ? "1.5rem" : "1rem",
        },
        content: {
            display: "grid",
            gridTemplateColumns: width > 1000 ? "1fr 1fr" : "1fr",
            gap: "20px",
            marginTop: "20px",
        },
        image: {
            width: "100%",
            height: "100%",
            alignSelf: "center",
            justifySelf: "center",
            transition: "transform 0.3s ease-in-out", // transition effect
        },
        blogPost: {
            background: "#f4f4f4",
            padding: width > 600 ? "20px" : "10px",
            borderRadius: "5px",
            color: "black",
            fontFamily: "sans-serif",
            fontSize: width > 1200 ? "1.8rem" : width > 600 ? "1.5rem" : "1rem",
        },
    };

    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <h1>Responsive Website</h1>
                <div>Menu</div>
            </nav>
            <header>
                <h1>UseResponsive Hook</h1>
                <h3>Using Window Resize Custom Hook</h3>
                <p>Width is {width}px</p>
                <p>Height is {height}px</p>
            </header>
            <div style={styles.content}>
                <img
                    style={styles.image}
                    src="https://wallpapers.com/images/featured/naruto-sage-of-six-paths-4geux1uiu72ek9bt.jpg"
                    alt="Placeholder"
                    className="imageHover"
                />
                <div style={styles.blogPost}>
                    <h2>Naruto Uzumaki's Journey</h2>
                    <h3>The Boy Who Dreamed of Being Hokage</h3>
                    <p>
                        Naruto Uzumaki was a young ninja with a dream of becoming
                        the strongest ninja and the leader of his village, the Hokage.
                        Despite being an orphan and ostracized by the villagers,
                        Naruto never gave up on his dream.
                    </p>
                    <p>
                        With his determination and the help of his friends, Naruto
                        trained hard, learning powerful jutsu and unlocking the secrets
                        of his past. His journey was filled with challenges and
                        adventures, but he faced them all with courage and resilience.
                    </p>
                </div>
            </div>
        </div >
    );
}