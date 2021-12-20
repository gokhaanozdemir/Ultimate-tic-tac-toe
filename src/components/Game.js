import React, { Component } from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    const boards = Array(9)
      .fill(null)
      .map((item) => {
        return Array(9).fill(null);
      });
    const currentPlayer = "X";
    const currentBoard = 0;

    this.state = {
      boards: boards,
      currentPlayer: currentPlayer,
      currentBoard: currentBoard,
    };
  }

  makeMove = (position) => {
    const boards = this.state.boards.slice();
    const currentBoard = this.state.currentBoard;
    const currentPlayer = this.state.currentPlayer;
    console.log(currentBoard, position);
    boards[currentBoard][position] = currentPlayer;
    this.setState({
      boards: boards,
      currentBoard: position,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
    });
  };

  render() {
    const globalBoard = this.state.boards.map(boards =>
      calculateWinner(boards))
      const winner = calculateWinner(globalBoard)
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.currentPlayer === 'X' ? 'X' : 'O');
      }
    return (
      <div className="game">
        <div className="game-board">
          {this.state.boards.map((item, index) => {
            const isCurrentBoard = this.state.currentBoard === index
            return (
              <Board
                boardData={item}
                key={index}
                onClick={this.makeMove}
                isCurrentBoard = {isCurrentBoard}
              />
            );
          })}
        </div>
        <div className="game-info">
          <div></div>
          <ol>{status}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
