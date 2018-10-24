import React, {Component} from 'react';


class Score extends Component {
    render() {
        return  (

            <div id="scoreNo">
                <h1>{this.props.score}</h1>
            </div>
        )
    }
} 
export default Score;