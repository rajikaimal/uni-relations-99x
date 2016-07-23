//entry point for flux application

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

//import theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Router components

import { Router, Route, Link, hashHistory } from 'react-router';

import SampleComponent from './components/core/sample.react';

ReactDOM.render((
	//inject theme provider into root component
	<MuiThemeProvider>
	    <Router history={hashHistory}>
	      <Route path="/" component={SampleComponent} />
	    </Router>
    </MuiThemeProvider>
  ),
  document.getElementById('target-node')
);