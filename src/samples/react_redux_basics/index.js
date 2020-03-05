import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import {counterReducer} from './index.redux';

const reduxDevtools = window.devToolsExtension() || (() => {}) ;

const store = createStore(counterReducer, compose(
	applyMiddleware(thunk),
	reduxDevtools
));


ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
