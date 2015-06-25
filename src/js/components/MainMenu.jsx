import React from 'react';  
import '../../sass/style.scss';
import {Link} from 'react-router';

import UserAction from '../actions/user_action';
import UserStore from '../stores/user_store';

let navClass="right hide-on-med-and-down";
class MainMenu extends React.Component {
    constructor() {
	super();
	this.state = { userInfo: this.getUserInfo()};
    }
    componentDidMount(){
	UserStore.addChangeListener(this._onChange.bind(this));
    }
    
    componentWillUnmount() {
	UserStore.removeChangeListener(this._onChange.bind(this));
    }

    getUserInfo() {
	return UserStore.getUserInfo();
    }

    _onChange() {
	this.setState(this.getUserInfo())
    }

    render() {
	let userMenu;
	let user = this.state.userInfo;

	if (user.loggedIn) {
	    userMenu = (
		<ul className={navClass}>
		  <li><Link to="settings">{user.userName}</Link></li>
		  <li><Link to="logout">Logout</Link></li>
		</ul>
	    );
	} else {
	    userMenu = (
		<ul className={navClass}>
		  <li><Link to="login">Login</Link></li>
		  <li><Link to="signup">Signup</Link></li>
		</ul>
	    );
	}

	return (
	    <nav className="light-blue lighten-1" role="navigation">
		<div className="nav-wrapper container">
		  <a className="brand-logo" href="#">Vijay</a>
		  {userMenu}
		</div>
		<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
	    </nav>
	);	 
    }
};

export default MainMenu;
