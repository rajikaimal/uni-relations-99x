import React from 'react';
//import containerAction from '../../actions/core/containeraction';
//import containerStore from '../../stores/core/containerstore';
import ListItem from '../events/list.react.js';

const container = React.createClass({
    getInitialState: function () {
        return {
            events: 0
        };
    },

    componentDidMount: function () {
        const context = this;
        fetch('/events')
          .then(function(response) {
            return response.json()
          }).then(function(json) {
            context.setState({
                events: json.events
            });
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          });
    },

    componentWillUnmount: function () {
        
    },

    _renderList: function() {
        return this.state.events.map((event) => {
            let doneVal;
            if(event.done == false) {
                doneVal = 'coming soon ...';
            }
            else {
                doneVal = 'done !';   
            }
            return (
                <ListItem key={event.name} 
                    name={event.name}  
                    date={event.date}
                    done={doneVal}
                />
            )
        });
    },

    render: function () {
        return (
            <div>
                {
                    this.state.events ? 
                        this._renderList() : 
                            'No events available at the moment ...'
                } 
            </div>
        );
    }
});

export default container;