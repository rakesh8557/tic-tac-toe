import React, { useState } from "react";
import Square from "./Sqaure";

const Board = () => {
    const [state, SetState] = useState(Array(9).fill(null));
    const [isXtrun, setisXtrun] = useState(true);

    const checkWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winner) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] == null) {
            const copyState = [...state];
            copyState[index] = isXtrun ? 'X' : 'O';
            SetState(copyState);
            setisXtrun(!isXtrun);
        }
    }

    const handlePlayAgain = () => {
        SetState(Array(9).fill(null));
    }

    return (
        <>
            {isWinner ? <div className="board-container">{isWinner} won the game
                <button onClick={handlePlayAgain}>Play again</button>
            </div> : <div className="board-container">
                <div className="board-row">
                    <Square click={() => handleClick(0)} value={state[0]} />
                    <Square click={() => handleClick(1)} value={state[1]} />
                    <Square click={() => handleClick(2)} value={state[2]} />
                </div>
                <div className="board-row">
                    <Square click={() => handleClick(3)} value={state[3]} />
                    <Square click={() => handleClick(4)} value={state[4]} />
                    <Square click={() => handleClick(5)} value={state[5]} />
                </div>
                <div className="board-row">
                    <Square click={() => handleClick(6)} value={state[6]} />
                    <Square click={() => handleClick(7)} value={state[7]} />
                    <Square click={() => handleClick(8)} value={state[8]} />
                </div>
            </div>}
        </>
    )
}

export default Board;