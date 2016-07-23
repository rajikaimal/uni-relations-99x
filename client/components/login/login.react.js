import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const login = React.createClass({

    _login: function() {
        let username = this.refs.username.input.value;
        let password = this.refs.password.input.value;
        this.props.login(username, password);
    },

    render: function () {
        return (
            <div>
                <TextField
                  hintText="username"
                  ref="username"
                />
                <br />
                <TextField
                  hintText="password"
                  ref="password"
                />
                <br />
                <RaisedButton label="Login" secondary={true} onClick={this._login} />
            </div>
        );
    }
});

export default login;