import Axios from "axios";
import { getRedirectPath } from '../util';

// const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';

const initState = {
    redirectTo: '',
    msg: '',
    isAuth: false,
    user: '',
    type: ''
}

// reducer
export function user(state=initState, action) {
    switch(action.type) {
        // case REGISTER_SUCCESS:
        //     return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
        // case LOGIN_SUCCESS:
        //     return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
        case AUTH_SUCCESS:
                return {...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload};
        case LOAD_DATA:
            return {...state, ...action.payload};
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg};
        default:
            return state;
    } 
}

export function login({user, pwd}) {
    if (!user || !pwd) {
        return errorMsg('Username and Password are required');
    }
    return dispatch => {
        Axios.post('/user/login', {user, pwd})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data));
                } else {
                    dispatch(errorMsg(res.data.msg));
                }
            })
    }
}

export function register({user, pwd, repeatpwd, type}) {
    if (!user || !pwd || !type) {
        return errorMsg('It is required.');
    }

    if(pwd !== repeatpwd) {
        return errorMsg('Password is not matched.')
    }
    return dispatch => {
        Axios.post('/user/register', {user, pwd, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess({user, pwd, type}));
                } else {
                    dispatch(errorMsg(res.data.msg));
                }
            })
    }
}

export function update(data) {
    return dispatch => {
        Axios.post('/user/update', data)
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data));
                } else {
                    dispatch(errorMsg(res.data.msg));
                }
            })
    }
}

export function loadData(userinfo) {
    return { type: LOAD_DATA, payload: userinfo};
}

// function loginSuccess(data) {
//     return {type: LOGIN_SUCCESS, payload: data};
// }

// function registerSuccess(data) {
//     return { type: REGISTER_SUCCESS, payload: data};
// }

function authSuccess(obj) {
    const {pwd, ...data} = obj;
    return { type: AUTH_SUCCESS, payload: data};
}

function errorMsg(msg) {
    return { msg, type: ERROR_MSG };
}