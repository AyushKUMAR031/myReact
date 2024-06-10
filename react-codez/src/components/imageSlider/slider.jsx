import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import StyleSheet from "./slider.module.css";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }

        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }

    }

    function handlePrevious() {
        setSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== "")
            fetchImages(url);
    }, [url]);

    console.log(images);

    if (loading) {
        return <div>Loading Data... Please Wait!!</div>
    }

    if (errorMsg !== null) {
        return <div>Error Occuring: {errorMsg}</div>
    }

    return (
        <div className={StyleSheet.main}>
            <h1>Image Slider</h1>
            <div className={StyleSheet.container}>
                <BsArrowLeftCircleFill className={`${StyleSheet.arrow} ${StyleSheet.arrowLeft}`} onClick={handlePrevious} />
                {
                    images && images.length ?
                        images.map((imageItem, index) => (
                            <img src={imageItem.download_url} alt={imageItem.author} key={imageItem.id}
                                className={currentSlide === index ? StyleSheet.currentImage : `${StyleSheet.currentImage} ${StyleSheet.hideCurrentImage}`} />))
                        : null
                }

                <span className={StyleSheet.circleIndicators}>
                {
                    images && images.length ?
                    images.map((_, index) => <button key={index} className={currentSlide === index ? StyleSheet.currentIndicators : `${StyleSheet.currentIndicators} ${StyleSheet.updateCurrentIndicator}`}
                    onClick={() => setSlide(index)}>
                        </button>)
                        : null
                        }
                </span>
                <BsArrowRightCircleFill className={`${StyleSheet.arrow} ${StyleSheet.arrowRight}`} onClick={handleNext} />
            </div>
        </div>  
    )
}