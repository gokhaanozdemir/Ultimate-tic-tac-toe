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
    const currentBoardIndex = 0;

    this.state = {
      boards: boards,
      currentPlayer: currentPlayer,
      currentBoardIndex: currentBoardIndex,
    };
  }
  handleReset() {
    this.setState({
      boards: Array(9)
        .fill(null)
        .map((item) => Array(9).fill(null)),
      currentBoardIndex: 0,
      currentPlayer: "X",
    });
  }

  makeComputerMove = () => {
    const currentBoard = this.state.boards[this.state.currentBoardIndex];

    const emptyPositions = currentBoard
      .filter((item) => item === null)
      .map((item, index) => {
        if (item === null) {
          return index;
        }
      })
      .filter((item) => {
        if (item !== undefined) {
          return true;
        }
      });

    const position =
      emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    this.makeMove(position);
  };
  componentDidUpdate(prevState, prevProps) {
    if (
      this.state.currentPlayer !== prevState.currentPlayer &&
      this.state.currentPlayer === "O"
    ) {
      this.makeComputerMove();
    }
  }
  makeMove = (position) => {
    const boards = this.state.boards.slice();
    const currentBoardIndex = this.state.currentBoardIndex;
    const currentPlayer = this.state.currentPlayer;
    const currentBoard = this.state.boards[this.state.currentBoardIndex];
    const isCurrentBoardFull =
      currentBoard.filter((item) => item !== null).length === 9;
    boards[currentBoardIndex][position] = currentPlayer;
    this.setState({
      boards: boards,
      currentBoardIndex: isCurrentBoardFull ? null : position,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
    });
  };
  render() {
    const globalBoard = this.state.boards.map((item) => calculateWinner(item));

    const winner = calculateWinner(globalBoard);
    let status;

    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.currentPlayer === "X" ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          {this.state.boards.map((item, index) => {
            const isCurrentBoard = this.state.currentBoardIndex === index;
            const status = globalBoard[index];
            return (
              <Board
                boardData={item}
                key={index}
                onClick={this.makeMove}
                isCurrentBoard={isCurrentBoard}
                status={status}
              />
            );
          })}
        </div>
        <div className="game-info">
          <ol>{status}</ol>
          <button className="button" onClick={() => this.handleReset()}>New Game</button>
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
