import { createStore } from 'redux';

// through reducer
// based on the old state and action, produce the new state
function counterReducer(state = 0, action) {
	switch(action.type) {
		case 'increase':
			return state + 1
		case 'decrease':
			return state - 1
		default:
			return 10
	}
}

// 1 create store
const store = createStore(counterReducer);

const init = store.getState();
console.log(init);

function listener() {
	const current = store.getState();
	console.log(`current value: ${current}`);
}
store.subscribe(listener);

// dispatch, pass the action
store.dispatch({type: 'increase'});
store.dispatch({type: 'increase'});
store.dispatch({type: 'decrease'});

