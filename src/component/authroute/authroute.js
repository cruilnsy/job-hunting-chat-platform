import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loadData } from '../../redux/user.redux';
import { connect } from 'react-redux';

@withRouter
@connect(
    null,
    { loadData }
)
class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login', '/register'];
        const pathname = this.props.location.pathname;
        if (publicList.indexOf(pathname) > -1) {
            return null;
        }
        // achieve the user information
        axios.get('/user/info')
            .then(res => {
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        // Having the login info
                        this.props.loadData(res.data.data);
                    } else {
                        this.props.history.push('/login');
                    }
                }
            });
        // Check if logined
        // current url address, login is not needed to redirect
        // if the user type is boss or genius
        // if the user information is complete (update photo, self-intro)
    }

    render() {
        return null;
    }
}

export default AuthRoute;