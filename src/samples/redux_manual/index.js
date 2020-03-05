import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import {counterReducer, addGun, addGunAsync, removeGun} from './index.redux';

const store = createStore(counterReducer, applyMiddleware(thunk));

// add redux dev tools on chrome
// const reduxDevtools = window.devToolsExtension() || (() => {}) ;

// const store = createStore(counterReducer, compose(
// 		applyMiddleware(thunk),
// 		reduxDevtools
// 	));

function render() {
	ReactDom.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />, document.getElementById('root'));
}

render();

store.subscribe(render);
