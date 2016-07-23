import React from 'react';
import CounterAction from '../../actions/core/action';
import CounterStore from '../../stores/core/store';
import FlatButton from 'material-ui/FlatButton';

const SampleComponent = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },
    componentDidMount: function () {
        CounterStore.addChangeListener(this._onChange);
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
    render: function () {
        return (
            <div>
                <FlatButton label="Click me" primary={true}/>
                <h2> Flux - hail one directional data flow </h2>
                <button className="form-control" onClick={this._increaseCounter}> Click me </button> {this.state.count}<br/><br/>
                <span> <a href="https://github.com/rajikaimal/flux-cli"> created with flux-cli </a> </span>
            </div>
        );
    }
});

export default SampleComponent;