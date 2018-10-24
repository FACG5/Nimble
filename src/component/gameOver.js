import React, { Component } from 'react';


class GameOver extends Component {
    render() {
        return  (

            <div id="scoreNo">
                <h1>{this.props.score}</h1>
            </div>
        )
    }
} 
export default GameOver;