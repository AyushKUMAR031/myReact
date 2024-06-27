
import { useEffect, useState } from "react";
import style from "./style.module.css";

export default function TicTacToe() {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    function Square({ value, onClick }) {
        return <button onClick={onClick} className={style.Square}>{value}</button>
    }

    function handleClick(getCurrentSquareIndex) {
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[getCurrentSquareIndex]) return;
        cpySquares[getCurrentSquareIndex] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    }

    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(item => item !== '')) {
            setStatus('Its a Draw ! You Can Restart The Game..');
        } else if (getWinner(squares)) {
            setStatus(`${isXTurn ? 'O' : 'X'} is the Winner`);
        } else {
            setStatus(`Next is ${isXTurn ? 'X' : 'O'}'s turn`);
        }
    }, [squares, isXTurn])

    console.log(squares);
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <div className={style.TicTacToeWrapper}>
                <div className={style.row}>
                    <Square value={squares[0]} onClick={() => handleClick(0)} />
                    <Square value={squares[1]} onClick={() => handleClick(1)} />
                    <Square value={squares[2]} onClick={() => handleClick(2)} />
                </div>
                <div className={style.row}>
                    <Square value={squares[3]} onClick={() => handleClick(3)} />
                    <Square value={squares[4]} onClick={() => handleClick(4)} />
                    <Square value={squares[5]} onClick={() => handleClick(5)} />
                </div>
                <div className={style.row}>
                    <Square value={squares[6]} onClick={() => handleClick(6)} />
                    <Square value={squares[7]} onClick={() => handleClick(7)} />
                    <Square value={squares[8]} onClick={() => handleClick(8)} />
                </div>
                <h2>{status}</h2>
                <button onClick={() => setSquares(Array(9).fill(''))}>Restart Game</button>
            </div>
        </>
    )
}