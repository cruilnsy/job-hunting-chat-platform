const ADD_GUN = 'increase';
const REMOVE_GUN = 'decrease';


// reducer
export function counter(state = 10, action) {
	switch(action.type) {
		case ADD_GUN:
			return state + 1
		case REMOVE_GUN:
			return state - 1
		default:
			return state
	}
}

// action creator
export function addGun() {
	return {type: ADD_GUN}
}
export function removeGun() {
	return {type: REMOVE_GUN}
}

// thunk will change the action creator
export function addGunAsync() {
	return dispatch => {
		setTimeout(() => {
			dispatch(addGun());
		}, 2000);
	}
}