import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import CollectPage from 'components/Pages/Welcome/CollectPage';
import ExplorePage from 'components/Pages/Welcome/ExplorePage';
import JoinPage from 'components/Pages/Welcome/JoinPage';
import { MapPage } from 'components/Pages/MapPage';
import { routes } from 'constants/routes';
import PrevPathUpdater from 'utils/PrevPathUpdater';
import { ProfilePage } from 'components/Pages/Welcome/ProfilePage';
import { ListPage } from 'components/Pages/Welcome/ListPage';

export const App = () => (
	<Router>
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
								<Route exact path={routes.WELCOME_EXPLORE} component={ExplorePage} />
								<Route exact path={routes.WELCOME_COLLECT} component={CollectPage} />
								<Route exact path={routes.WELCOME_JOIN} component={JoinPage} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				);
			}}
		/>
		<Route path={routes.MAP} component={MapPage}/>
		<Route path={routes.WELCOME_PROFILE} component={ProfilePage}/>
		<Route path={routes.WELCOME_LIST} component={ListPage}/>
	</Router>
);
