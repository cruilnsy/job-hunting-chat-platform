import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

import App from './App';
import {counterReducer} from './index.redux';

const reduxDevtools = window.devToolsExtension() || (() => {}) ;

const store = createStore(counterReducer, compose(
	applyMiddleware(thunk),
	reduxDevtools
));


function SquadOne() {
	return <h2>SquadOne page</h2>;
}

function SquadTwo() {
	return <h2>SquadTwo page</h2>;
}

class Test extends React.Component {
	render() {
		console.log(this.props);
		// jump to the home page
		// this.props.history.push('/');
		return <h2>Test Component: {this.props.match.params.location}</h2>;
	}
}
// <Route path='/:location' component={Test}></Route>

// <Redirect to='/'></Redirect>

// Login: no login info, jump to login
// Dashboard: nav + info + logout


ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/squadone'>Squad One</Link></li>
					<li><Link to='/squadtwo'>Squad Two</Link></li>
				</ul>

				<Switch>
					{/* Only render the first Route */}
					<Route path='/' exact component={App}></Route>
					<Route path='/squadone' component={SquadOne}></Route>
					<Route path='/squadtwo' component={SquadTwo}></Route>
					<Route path='/:location' component={Test}></Route>
				</Switch>
				
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root'));
