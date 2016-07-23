import React from 'react';
import addAction from '../../actions/dashboard/add';

const addcontainer = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },

    _addEvent: function(eventName, date) {

    },

    render: function () {
        return (
            <div>
                <Add addEvent={_addEvent} />
            </div>
        );
    }
});

export default addcontainer;