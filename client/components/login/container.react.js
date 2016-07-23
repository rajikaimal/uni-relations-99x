import React from 'react';
import LoginAction from '../../actions/login/login';
//import containerStore from '../../stores/core/containerstore';

import Components from './login.react';

const container = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },

    componentDidMount: function () {

    },

    componentWillUnmount: function () {
        
    },

    _handleLogin: function(username, password) {
        localStorage.setItem('uni-rel-acc', 'haa');
        LoginAction.login();
    },

    render: function () {
        return (
            <div>
                <Components login={this._handleLogin} />
            </div>
        );
    }
});

export default container;