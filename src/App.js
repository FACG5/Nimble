import React, { Component } from 'react';
import './App.css';
import Level from './component/lvl';
import Logo from './component/logo.js';
import Score from './component/score.js';
import Lives from './component/lives';


class App extends Component {
  state = {
    score:0,
    level:0,
    lives: 3
  }
  levelup = (number)=>{
    this.setState({
      level:number
    })
  }
  lifeOff = ()=>{
    this.setState({
      lives : this.state.lives - 1
    })
  }
  inc = ()=>{
    this.setState({
      score: ++this.state.score,
    })
    console.log('score: ', this.state.score);
  }
  render() {
    let logos = [];
        for (let i= 0; i< 5; i++ ) {
            logos.push(<Logo levelup ={this.levelup} score={this.state.score} inc={this.inc}    lifeOff={this.lifeOff}/>)
        }
    return (
       <div className="App">
       { this.state.lives !== 0  ? 
        <div>
          <Lives lives={this.state.lives}/>
          <Level level={this.state.level}/>
          <Score score={this.state.score}/>
          {logos}
        </div> : <div className="gameOver">game over</div>
      }
      </div>
    );
  }
}

export default App;
