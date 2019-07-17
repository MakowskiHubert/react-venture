import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { routes } from 'constants/routes';
import { ProfilePage } from 'components/Pages/Welcome/ProfilePage';
import { ListPage } from 'components/Pages/Welcome/ListPage';
import { withFirebase } from 'components/Firebase';
import Main from 'components/Lists/Main';
import { Category } from 'components/Lists/Category';
import { LocationPage } from 'components/Pages/LocationPage';
import { WelcomePage } from 'components/Pages/Welcome/WelcomePage';
import JoinPage from 'components/Pages/Welcome/JoinPage';
import { NotFoundPage } from 'components/Pages/NotFoundPage';
import { updateAuth } from 'ducks/user';

const Some = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

class App extends Component {
	componentDidMount() {
		const { firebase, updateAuth } = this.props;

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
				<Route exact path={routes.MAIN} component={() => <Redirect to={routes.WELCOME_SLIDER}/>}/>
				<Route
					render={({ location }) => {
						return (
							<TransitionGroup>
								<CSSTransition
									classNames='fade'
									key={location.key}
									timeout={450}
								>
									<Some>
										<Switch location={location}>
											<Route exact path={routes.MAIN} component={null}/>
											<Route path={routes.WELCOME_SLIDER} component={WelcomePage}/>
											<Route path={routes.JOIN} component={JoinPage}/>
											<Route path={routes.WELCOME_PROFILE} component={ProfilePage}/>
											<Route path={routes.WELCOME_LIST} component={ListPage}/>
											<Route path={routes.LISTS_MAIN} component={Main}/>
											<Route path={routes.LISTS_CATEGORY} component={Category}/>
											<Route path={routes.MAP} component={LocationPage}/>
											<Route path={routes.NOT_FOUND} component={NotFoundPage}/>
										</Switch>
									</Some>
								</CSSTransition>
							</TransitionGroup>
						);
					}}
				/>
			</Router>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	isLogged: user.isLogged
});

export default withFirebase(
	connect(mapStateToProps, { updateAuth })(App)
);
