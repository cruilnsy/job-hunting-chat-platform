import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import App from './App';
import { logout } from './Auth.redux';

function SquadOne() {
	return <h2>SquadOne page</h2>;
}

function SquadTwo() {
	return <h2>SquadTwo page</h2>;
}

@connect(
	state => state.auth,
	{logout}
)
class Dashboard extends React.Component {
	render() {
		console.log('Logout: ', this.props);
		const match = this.props.match;
		const redirectToLogin = <Redirect to='/login'></Redirect>;
		const app = (
			<div>
				<h1>1st Platoon</h1>
				{this.props.isAuth ? <button onClick={this.props.logout}>Logout</button> : null}
				<ul>
					<li><Link to={`${match.url}/`}>Home</Link></li>
					<li><Link to={`${match.url}/squadone`}>Squad One</Link></li>
					<li><Link to={`${match.url}/squadtwo`}>Squad Two</Link></li>
				</ul>
				<Route path={`${match.url}/`} exact component={App}></Route>
				<Route path={`${match.url}/squadone`} component={SquadOne}></Route>
				<Route path={`${match.url}/squadtwo`} component={SquadTwo}></Route>
			</div>
		);
		return this.props.isAuth ? app : redirectToLogin;
	}
}

export default Dashboard
