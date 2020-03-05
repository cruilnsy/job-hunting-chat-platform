import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from './Auth.redux';

@connect(
	state => state.auth,
	{login}
)
class Auth extends React.Component {
	render() {
		console.log('Login: ', this.props);
		return (
			<div>
				{this.props.isAuth ? <Redirect to=''></Redirect> : null}
				<h2>You are not login. Please Login.</h2>
				<button onClick={this.props.login}>Login</button>
			</div>
		);
	}
}

export default Auth
