import React, { Component } from 'react';


class Level extends Component {
    render() {
        return  (
            <div id="level">
                <h1>Level {+this.props.level + 1}</h1>
            </div>
        )
    }
} 
export default Level;