import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './starStyle.css';

export default function StarRating({ noOfStar = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        setRating(currentIndex);
    }

    function handleMouseEnter(currentIndex) {
        setHover(currentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);

    }

    return (
        <div className={'starRating'} >
            <h1>Star Rating</h1>
            {[...Array(noOfStar)].map((_, index) => {
                index++;

                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    ></FaStar>
                );
            })
            }
        </div>
    );
}