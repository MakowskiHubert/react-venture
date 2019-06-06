import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import CollectPage from 'components/Pages/Welcome/CollectPage';
import ExplorePage from 'components/Pages/Welcome/ExplorePage';
import JoinPage from 'components/Pages/Welcome/JoinPage';
import { MapPage } from 'components/Pages/MapPage';
import { routes } from 'constants/routes';
import PrevPathUpdater from 'utils/PrevPathUpdater';
import { ProfilePage } from 'components/Pages/Welcome/ProfilePage';
import { ListPage } from 'components/Pages/Welcome/ListPage';

export class App extends Component {
	componentDidMount() {
		let viewHeight = window.outerHeight;
		let viewWidth = window.outerWidth;
		let viewport = document.querySelector('meta[name=viewport]');
		viewport.setAttribute('content', `height=${viewHeight}, width=${viewWidth}, initial-scale=1.0`);
	}

	render() {
		return (
			<Router>
				<Route exact path={routes.WELCOME} component={() => <Redirect from={routes.WELCOME} to={routes.WELCOME_EXPLORE} />}/>
				<Route
					render={({ location }) => {
						return (
							<TransitionGroup component={PrevPathUpdater}>
								<CSSTransition
									timeout={200}
									classNames="page"
									key={location.key}
								>
									<Switch location={location}>
										<Route path={routes.WELCOME_EXPLORE} component={ExplorePage}/>
										<Route path={routes.WELCOME_COLLECT} component={CollectPage}/>
										<Route path={routes.WELCOME_JOIN} component={JoinPage}/>
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						);
					}}
				/>
				<Route path={routes.MAP} component={MapPage}/>
				<Route path={routes.WELCOME_PROFILE} component={ProfilePage}/>
				<Route path={routes.WELCOME_LIST} component={ListPage}/>
				<Route component={null} />
			</Router>
		);
	}
}