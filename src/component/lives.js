import React, { Component } from 'react';


class Lives extends Component {
    render() {
        let hearts = [];
        for (let i= 0; i< this.props.lives; i++ ) {
            hearts.push(<img src="./heart.png"/>)
        }
        
        return  (
            <div id="lives">
                {hearts}
            </div>
        )
    }
} 
export default Lives;