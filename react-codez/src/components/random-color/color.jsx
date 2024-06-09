import { useEffect, useState } from "react";
import StyleSheet from './color.module.css';

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        typeOfColor === 'rgb' ? handleRandomRgbColor() : handleRandomHexColor();
    }, [typeOfColor]);

    return (
        <div className={StyleSheet.maan} style={{ background: color }}>
            <div className={StyleSheet.container}>
                <center>
                    <h1>Random Color</h1>
                    <div className={StyleSheet.space}>
                        <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}>Generate Random-Color</button>
                        <button onClick={() => setTypeOfColor('hex')}>HEX-Color</button>
                        <button onClick={() => setTypeOfColor('rgb')}>RGB-Color</button>
                    </div>
                    <div className={StyleSheet.cool}>
                        <h2>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h2>
                        <h3>{color}</h3>
                    </div>
                </center>
            </div>
        </div>
    );
}
