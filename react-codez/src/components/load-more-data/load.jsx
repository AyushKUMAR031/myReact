import { useEffect, useState } from "react";
import StyleSheet from "./style.module.css";

export default function LoadMoreData({
    url = "https://dummyjson.com/products",
    limit = 12,
    total = 200, }) {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`${url}?limit=${limit}&skip=${count === 0 ? 0 : count * limit}`);
            const data = await response.json();

            console.log(data);

            if (data && data.products && data.products.length) {
                setProducts((prevProduct) => [...prevProduct, ...data.products]);
                setLoading(false);
            }

        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count])

    useEffect(() => {
        if (products && products.length >= total)
            setDisable(true);
    }, [products, total])

    if (loading) {
        return <div><center>Loading Products... Please Wait!!!</center></div>
    }

    return (
        <div className={StyleSheet.main}>
            <h1>Our Products List</h1>
            <div className={StyleSheet.productContainer}>
                {
                    products && products.length ?
                        products.map((dataItem) => (<div className={StyleSheet.product} key={dataItem.id}>
                            <img src={dataItem.thumbnail} />
                            <p>{dataItem.title}</p>
                        </div>
                        ))
                        : null
                }
            </div>
            <div className={StyleSheet.buttonContainer}>
                <button disabled={disable} onClick={() => setCount(count + 1)}>Load More Products</button>
                {
                    disable && <p>You have Reached to the END</p>
                }
            </div>
        </div>
    )
}