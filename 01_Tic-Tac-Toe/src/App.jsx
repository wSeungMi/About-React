import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 현재 squares의 상태 확인
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    console.log(nextSquares);
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
}
