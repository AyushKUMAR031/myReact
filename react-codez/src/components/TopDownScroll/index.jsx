import UseFetch from "../../concept/code/Hook/Custom-Hook/useFetch";
import styles from "./style.module.css";


export default function TopDownScroll() {
    const { data, error, waiting, refetch } = UseFetch('https://dummyjson.com/products?limit=20', {});

    function handleScrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'

        });
    }

    function handleScrollBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={styles.whole}>
            <div className={styles.cent}>
                <h3 >Scroll To Top and Down Feature</h3>
                <button onClick={refetch} disabled={waiting}>Fetch Data</button>
                {waiting && <h3>Loading...</h3>}
                {error && <h3>Error: {error.message}</h3>}
                {data && data.products && data.products.length ?
                    data.products.map(productItem => <p key={productItem.id}>{productItem.title}</p>)
                    : null
                }
            </div>
            <button onClick={handleScrollTop} className={`${styles.top} ${styles.btns}`} >Top</button>
            <button onClick={handleScrollBottom} className={`${styles.bottom} ${styles.btns}`}>Down</button>
        </div>
    )
}