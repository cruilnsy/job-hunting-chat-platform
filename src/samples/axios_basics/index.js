import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import reducers from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';
import config from './config';


const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__() || (() => {}) ;

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	reduxDevtools
));

ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/login' exact component={Auth}></Route>
					<Route path='/dashboard' component={Dashboard}></Route>
					<Redirect to='/dashboard'></Redirect>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root'));
