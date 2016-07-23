//entry point for flux application

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'whatwg-fetch';

injectTapEventPlugin();

//import theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Router components

import { Router, Route, Link, browserHistory } from 'react-router';

import Core from './components/core/core.react';
import Events from './components/events/container.react';
import Dashboard from './components/dashboard/dashboard.react';
import Login from './components/login/container.react';

function requireAuth(nextState, replace) {
  if (!localStorage.getItem('uni-rel-acc')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render((
	//inject theme provider into root component
	<MuiThemeProvider>
	    <Router history={browserHistory}>
	      <Route path="/" component={Core} >
	      	<Route path="/events" component={Events} />	
	      	<Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
	      	<Route path="/login" component={Login} />
	      </Route>
	    </Router>
    </MuiThemeProvider>
  ),
  document.getElementById('target-node')
);