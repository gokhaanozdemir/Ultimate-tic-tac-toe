import React, { Component } from 'react'
import Square from './Square';
 class Board extends Component {
  render() {
    const status = "Next player:X"

    return (
      <div>
      <div className ="status">{status}
      </div>
        <div style={{display:"flex"}}>
           <Square/>
            <Square/>
            <Square/>
          </div>
          <div style={{display:"flex"}}>
            <Square/>
           <Square/>
           <Square/>
          </div>
         <div style={{display:"flex"}}>
            <Square/>
            <Square/>
            <Square/>
          </div>
        </div>
    )
  }
}
export default Board;
