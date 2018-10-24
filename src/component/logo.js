import React, { Component } from 'react';
import logo from '../logo.svg'

class Logo extends Component {
	state = {
		visibility: true,
		none:' ',
		styles:{},
		animationSpeed: "animationDown0"
	}

	onClick(event) {
		const styles = this.getRandomArbitrary();
		this.props.inc();
		const newState = {
			styles :styles,
			visibility:true,
		}

		const arr = [10, 20, 30, 40, 55, 75]; 
		const score = this.props.score;
		if(score > arr[0] && score < arr[1]){
			
			newState.animationSpeed = "animationDown1"
			this.props.levelup(newState.animationSpeed.substring(newState.animationSpeed.length-1))
		}else if (score > arr[1] && score < arr[2]){
			newState.animationSpeed = "animationDown2"
			this.props.levelup(newState.animationSpeed.substring(newState.animationSpeed.length-1))
		}else if (score > arr[2] && score < arr[3]){
			newState.animationSpeed = "animationDown3"
			this.props.levelup(newState.animationSpeed.substring(newState.animationSpeed.length-1))
		}else if (score > arr[3] && score < arr[4]){
			newState.animationSpeed = "animationDown4"
			this.props.levelup(newState.animationSpeed.substring(newState.animationSpeed.length-1))
		}else if (score > arr[4] && score < arr[5]){
			newState.animationSpeed = "animationDown5"
			this.props.levelup(newState.animationSpeed.substring(newState.animationSpeed.length-1))
		}else if (score > arr[5]){
			newState.animationSpeed = "animationDown6"
			this.props.levelup(newState.animationSpeed.substring(newState.animationSpeed.length-1))
		}
		this.setState({
			visibility:false
		}, async ()=>{
			await this.setState(newState);
		});
	}
	reset(e){
		if(e.animationName === "App-logo-move"){
			const styles = this.getRandomArbitrary();
			this.props.lifeOff();
			this.setState({
				styles: styles,
			})
		}
	}

	componentDidMount(){
		const styles = this.getRandomArbitrary();
		this.setState({
			styles,
		})
	}

	getRandomArbitrary() {
		const random = Math.floor(Math.random() * (85 - 10) + 10)+"%";
		const styles = {left:random}
		return styles;
	}

	render() {
		const classes = "App-logo animationSideWays "+  this.props.cla + this.state.none;
		return (
			this.state.visibility &&
				<div
					style={this.state.styles} 
					ref="img"
					className={this.state.animationSpeed}
					onAnimationIteration={(e) => this.reset(e)}>
						<img
							onClick={(event) => this.onClick(event)}
							id={this.props.idElement}
							src={logo}
							className={classes}
							alt="logo"/>
				</div>
		);
	}
}
export default Logo;