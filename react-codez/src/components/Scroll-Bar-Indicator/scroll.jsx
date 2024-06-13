import { useEffect, useState } from "react"
import sheet from "./scroll.module.css";

export default function ScrollBarIndicator({url}){

    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [scrollPercent,setScrollPercent] = useState(0);

    async function fetchData(getUrl){
        try{
            setLoading(true);
            const response = await fetch(getUrl);
            const result = await response.json();

            if(result && result.products && result.products.length > 0)
                setData(result.products);

        }catch(e){
            console.log(e);
        }finally{
            setLoading(false);
        }
    }

    function handleScrollPercent(){
        const scrollTillNow = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.body.scrollHeight - document.documentElement.clientHeight;

        setScrollPercent((scrollTillNow/height)*100);
    }

    useEffect(()=>{
        fetchData(url);
    },[url])

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollPercent)
        return () => {
            window.removeEventListener('scroll',() => {})
        }
    },[]);

    console.log(scrollPercent);

    return (
        <div>
            <div className={sheet.top}>
                <h1>Custom Scroll Bar</h1>
                <div className={sheet.scrollContainer}>
                    <div className={sheet.scrollBar} style={{width : `${scrollPercent}%`}}></div>
                </div>
            </div>
            <div className={sheet.dataContainer}>
                {
                    loading ? <h2>Loading...</h2> :
                    data && data.length > 0 ? 
                        data.map(dataItem => <p key={dataItem.id}>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>
        
    )
}