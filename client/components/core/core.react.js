import React from 'react';
import CounterAction from '../../actions/core/action';
import CounterStore from '../../stores/core/store';
import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton';
//import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { browserHistory } from 'react-router';

const CoreComponent = React.createClass({
    getInitialState: function () {
        return {
            events: 0,
            loginStatus: false
        };
    },

    componentDidMount: function () {
        if(localStorage.getItem('uni-rel-acc')) {
            this.setState({
                loginStatus: true
            });
        } 
        CounterStore.addChangeListener(this._onChange);
        browserHistory.push('events');
    },

    componentWillUnmount: function () {
        //cleanup code comes here
    },

    _onChange: function() {
        this.setState({
            count: ++this.state.count
        });
    },

    _increaseCounter: function() {
        CounterAction.invokeCounter();    
    },

    _goToDashboard: function() {
        browserHistory.push('/dashboard');
    },

    render: function () {
        return (
            <div>
                <AppBar
                    title="uni-relations"
                    iconElementRight={<FlatButton onClick={this._goToDashboard} label={ this.state.loginStatus ? 'Dashboard' : 'Login'} />}
                />
                <br />

                
                
                {
                    this.props.children
                }
            </div>
        );
    }
});

export default CoreComponent;