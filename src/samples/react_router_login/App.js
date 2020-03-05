import React from 'react';
import { connect } from 'react-redux';

import { addGun, removeGun, addGunAsync } from './index.redux';

// babel-plugin-transform-decorators-legacy
@connect(
	state => ({num: state.counter}), 			// put the properties of state into props
	{addGun, removeGun, addGunAsync}	// what methods to put into props, auto dispatch
)
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Current Guns: {this.props.num}</h1>
				<button onClick={this.props.addGun}>Add Gun</button>
				<button onClick={this.props.removeGun}>Remove Gun</button>
				<br />
				<button onClick={this.props.addGunAsync}>Add Gun in 2 days</button>
			</div>
		);
	}
}

export default App