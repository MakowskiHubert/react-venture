import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { MapPage } from 'components/Pages/MapPage';
import { routes } from 'constants/routes';
import { ProfilePage } from 'components/Pages/Welcome/ProfilePage';
import { ListPage } from 'components/Pages/Welcome/ListPage';
import {updateAuth} from 'ducks/user';
import { withFirebase } from 'components/Firebase';
import Main from 'components/Lists/Main';
import Category from 'components/Lists/Category';
import { LocationPage } from 'components/Pages/LocationPage';
import { WelcomePage } from 'components/Pages/Welcome/WelcomePage';

class App extends Component {
	componentDidMount() {
		const {firebase, updateAuth} = this.props;

		this.listener = firebase.auth.onAuthStateChanged(authUser => {
			authUser ? updateAuth(true) : updateAuth(false);
		});

		let viewHeight = window.outerHeight;
		let viewWidth = window.outerWidth;
		let viewport = document.querySelector('meta[name=viewport]');
		viewport.setAttribute('content', `height=${viewHeight}, width=${viewWidth}, initial-scale=1.0`);
	}

	render() {
		return (
			<Router>
				<Route exact path={routes.WELCOME} component={() => <Redirect from={routes.WELCOME} to={routes.DEBUG} />}/>
				<Route path={routes.WELCOME_SLIDER} component={WelcomePage}/>
				<Route path={routes.MAP} component={MapPage}/>
				<Route path={routes.WELCOME_PROFILE} component={ProfilePage}/>
				<Route path={routes.WELCOME_LIST} component={ListPage}/>
				<Route path={routes.DEBUG} component={WelcomePage}/>
				<Route component={null} />
			</Router>
		);
	}
}

const mapStateToProps = ({user}) => ({
	isLogged: user.isLogged
});

export default withFirebase(
	connect(mapStateToProps, {updateAuth})(App)
);
