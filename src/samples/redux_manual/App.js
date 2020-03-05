import React from 'react';
// import { addGun } from './index.redux';

class App extends React.Component {
	render() {
		const store = this.props.store;
		const num = store.getState();
		const addGun = this.props.addGun;
		const removeGun = this.props.removeGun;
		const addGunAsync = this.props.addGunAsync;
		return (
			<div>
				<h1>Current Guns: {num}</h1>
				<button onClick={() => store.dispatch(addGun())}>Add Gun</button>
				<button onClick={() => store.dispatch(removeGun())}>Remove Gun</button>
				<br />
				<button onClick={() => store.dispatch(addGunAsync())}>Add Gun in 2 days</button>
			</div>
		);
	}
}

export default App