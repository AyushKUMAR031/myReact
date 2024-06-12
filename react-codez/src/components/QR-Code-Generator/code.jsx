import QRCode from "react-qr-code";
import { useState } from "react";
import sheet from "./style.module.css";

export default function QRCodeGen() {

    const [qrCode, setQRCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQR() {
        setQRCode(input);
        setInput('');
    }

    return (
        <div >
            <h1>QR Code Generator</h1>
            <center className={sheet.qrcontainer}>
                <div>
                    <input onChange={(e) => setInput(e.target.value)}
                        type="text" name="qr-code" value={input} placeholder="Enter ur data here.." />
                    <button  disabled={input && input.trim() !== "" ? false : true } onClick={handleGenerateQR}>Generate</button>
                </div>
                <div >
                    <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
                </div>
            </center>
        </div>
    )
}