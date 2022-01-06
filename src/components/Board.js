import React, { Component } from 'react'
import Square from './Square';
 class Board extends Component {
  render() {
    return (
      <div className = "board">
        {this.props.boardData.map((item , index) => {
          const isEmpty = item === null ? true : false
          return <Square
            value={item}
            onClick={() => this.props.onClick(index) }
            key = {index}
            isDisabled = {!this.props.isCurrentBoard  || !isEmpty }
        />
      })}
     {this.props.status !== null && <span className="big">{this.props.status}</span>}
        </div>
    )
  }
}
export default Board;