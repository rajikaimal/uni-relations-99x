import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

let date = null;

const add = React.createClass({

    _getDate: function(n, date) {
        date = date;
    } 

    _handleSubmit: function() {
        console.log(date);
        let name = this.refs.event.input.value;
        this.props.addEvent(name, date);
    },

    render: function () {
        return (
            <div>
                <TextField
                  hintText="event name"
                  ref="event"
                />
                <br />
                <DatePicker hintText="pick a date" onChange={this._getDate} />
                <br />
                <RaisedButton label="Login" secondary={true} onClick={this._login} />
            </div>
        );
    }
});

export default add;