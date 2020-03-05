import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			leader: 'leader'
		};
	}

	handleLeader(event) {
		console.log(event.target.value);
		this.setState({leader: event.target.value});
	}

  	render() {
	  	let boss = 'Rui'
	  	return (
	  		<div>
	  			<h1>1st Platoon ({boss}</h1>
	  			<SquadOne leader={this.state.leader} />
	  			<SquadTwo leader="Vivian" setLeader={this.handleLeader.bind(this)} />
	  		</div>
	  	);
  	}
}

class SquadOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			soldiers: ['Ross', 'Rachel', 'Monica', 'Phebe', 'Joey', 'Chandler']
		}
		this.addSoldier = this.addSoldier.bind(this);
	}

	componentWillMount() {
		console.log('Component will be loaded');
	}

	componentDidMount() {
		console.log('Component did load');
	}

	addSoldier() {
		console.log('add new soldier');
		this.setState({
			soldiers: [...this.state.soldiers, 'new soldier' + Math.random()]
		})
	}

	render() {
		console.log('Component is rendering');
		// onClick={this.addSoldier.bind(this)}
		// onClick={() => this.addSoldier()}
		return (
			<div>
				<h2>1st Squad</h2>
				<p>{`Leader: ${this.props.leader}`}</p>
				<button onClick={this.addSoldier}>Add Soldier</button>
				<ul>
					{this.state.soldiers.map(v => <li key={v}>{v}</li>)}
				</ul>
			</div>
		);
	}
}

function SquadTwo (props) {
	// "use strict"
	// can not use this for function, except to new function
	// this.leader = props.leader;

	const changeLeader = (event) => {
		props.setLeader(event);
	}

	// onChange={(event) => props.setLeader(event)}
	return (
		<div>
			<h2>2nd Squad, lead by {props.leader}</h2>
			<input type="text" placeholder="Input Leader name" onChange={changeLeader} />
		</div>
	);
}

export default App