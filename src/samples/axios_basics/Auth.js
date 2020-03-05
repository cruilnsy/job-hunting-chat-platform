import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, getUserData } from './Auth.redux';

@connect(
	state => state.auth,
	{login, getUserData}
)
class Auth extends React.Component {
	componentDidMount() {
		this.props.getUserData();
	}

	render() {
		return (
			<div>
				<h2>My name is {this.props.user}, and age is {this.props.age}</h2>
				{this.props.isAuth ? <Redirect to=''></Redirect> : null}
				<h2>You are not login. Please Login.</h2>
				<button onClick={this.props.login}>Login</button>
			</div>
		);
	}
}

export default Auth
