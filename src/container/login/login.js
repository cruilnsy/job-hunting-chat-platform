import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

import { login } from '../../redux/user.redux';

import Logo from '../../component/logo/logo';

@connect(
	state => state.user,
	{ login }
)
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pwd: ''
		}
		this.handleLogin = this.handleLogin.bind(this);
		this.register = this.register.bind(this);
	}

	handleChange(key, val) {
		this.setState({
			[key]: val
		});
	}

	handleLogin() {
		this.props.login(this.state);
	}

	register() {
		this.props.history.push('/register');
	}

	render() {
		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
				<Logo></Logo>
				<h2>Login Page</h2>
				<WingBlank>
					<List>
						{this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}

						<InputItem 
							onChange={v => this.handleChange('user', v)}
						>Username</InputItem>
						<InputItem 
							type="password"
							onChange={v => this.handleChange('pwd', v)}
						>Password</InputItem>
					</List>
					<WhiteSpace />
					<Button type="primary" onClick={this.handleLogin}>Login</Button>
					<WhiteSpace />
					<Button type="primary" onClick={this.register}>Register</Button>
				</WingBlank>
			</div>
		);
	}
}

export default Login;