import React from 'react';  
import Router from "react-router";
import '../sass/style.scss';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import SignupHandler from './components/Signup';
import LoginHandler from './components/Login';
import LogoutHandler from './components/Logout';
import SettingsHandler from './components/Settings';
import Dashboard from './components/Dashboard';	
import MainMenu from './components/MainMenu';

import RouterContext from './lib/router.js';

class App extends React.Component{  
    constructor() {
	super();
    }
    
    render() {
	return (
		<div>
		<MainMenu/>
		{/* this is the importTant part */}
		<div className="section no-pad-bot" id="index-banner">
		<div className="container">
		<br/>
		<h1 className="header center orange-text">Starter Template</h1>
		<div className="row center">
		<h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
		</div>
		<div className="row center">
		<a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
		</div>
		<br/>
		
		</div>
		</div>
		<RouteHandler/>

		
		<footer className="page-footer orange">
		<div className="container">
		<div className="row">
		<div className="col l6 s12">
		<h5 className="white-text">Company Bio</h5>
		<p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


		</div>
		<div className="col l3 s12">
		<h5 className="white-text">Settings</h5>
		<ul>
		<li><a className="white-text" href="#!">Link 1</a></li>
		<li><a className="white-text" href="#!">Link 2</a></li>
		<li><a className="white-text" href="#!">Link 3</a></li>
		<li><a className="white-text" href="#!">Link 4</a></li>
		</ul>
		</div>
		<div className="col l3 s12">
		<h5 className="white-text">Connect</h5>
		<ul>
		<li><a className="white-text" href="#!">Link 1</a></li>
		<li><a className="white-text" href="#!">Link 2</a></li>
		<li><a className="white-text" href="#!">Link 3</a></li>
		<li><a className="white-text" href="#!">Link 4</a></li>
		</ul>
		</div>
		</div>
		</div>
		<div className="footer-copyright">
		<div className="container">
		Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
		</div>
		</div>
		</footer>


		</div>

		
		
	);
	}
	};


	    let routes = (  
		<Route name="app" path="/" handler={App}>
		<Route name="signup" path="/signup" handler={SignupHandler}/>
		<Route name="login" path="/login" handler={LoginHandler}/>
		<Route name="settings" path="/settings" handler={SettingsHandler}/>
		<Route name="logout" path="/signout" handler={LogoutHandler}/>
		<DefaultRoute handler={Dashboard} />	      	
		</Route>
	);

	    var _router = Router.create(routes);

	    RouterContext.set(_router);


	    _router.run(function (Handler) {  
	    React.render(<Handler/>, document.getElementById('app'));
	});

