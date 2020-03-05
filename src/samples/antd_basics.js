import React from 'react';
import { Button, Card, InputItem, List, NavBar, WingBlank, WhiteSpace} from 'antd-mobile';

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
	  	return (
	  		<div>
	  			<NavBar>1st Platoon</NavBar>
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
			<WingBlank size="lg">
				<WhiteSpace size="lg" />
				<Card>
					<Card.Header 
						title="1st Squad"
						extra={<span>{`Leader: ${this.props.leader}`}</span>}
					/>
					<Card.Body>
						<Button type="primary" onClick={this.addSoldier}>Add Soldier</Button>
						<List>
							{this.state.soldiers.map(v => {
								return <List.Item key={v} arrow="horizontal">{v}</List.Item>
							})}
						</List>
					</Card.Body>
				</Card>
			</WingBlank>
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
			<WhiteSpace size="lg" />
			<Card>
				<Card.Header 
					title={`2nd Squad, lead by ${props.leader}`}
				/>
				<Card.Body>
					<input type="text" placeholder="Typein 1st Squad Leader" onChange={changeLeader} />
				</Card.Body>
			</Card>
		</div>
	);
}

export default App