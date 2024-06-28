import UseFetch from ".";

export default function UseFetchHookTest() {
    const { data, error, waiting, refetch } = UseFetch('https://dummyjson.com/products?limit=10', {});

    return (
        <div>
            <h1>UseFetch-Hook</h1>
            <button onClick={refetch} disabled={waiting}>Fetch Data</button>
            {waiting && <h3>Loading...</h3>}
            {error && <h3>Error: {error.message}</h3>}
            {data && data.products && data.products.length ?
                data.products.map(productItem => <p key={productItem.id}>{productItem.title}</p>)
                : null
            }
        </div>
    );
}
