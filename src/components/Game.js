import React, { Component } from 'react'
import Board from './Board';

 class Game extends Component {
    render() {
        return (
        <div style ={{display:"flex",justifyContent:"space-between"}}>
            <div style = {{display:"flex",}}>
                  <Board/>
                </div>
                <div  style = {{display:"flex"}}>
                   <Board/>
                </div>
                <div style = {{display:"flex"}}>
                  <Board/>
                </div>
                <div style ={{display:"flex"}}>
                   <Board/>
                </div>
                <div style ={{display:"flex"}}>
                    <Board/>
                </div>
                <div style ={{display:"flex"}}>
                  <Board/>
                </div>
                <div style ={{display:"flex"}}>
                  <Board/>
                </div>
                <div style ={{display:"flex"}}>
                  <Board/>
                </div>
                <div style ={{display:"flex"}}>
                  <Board/>
                </div>
        </div>
        )
    }
}
export default Game;
