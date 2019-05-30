import React from 'react';
import {Router, Route} from 'react-router-dom';
import { ExplorePage } from 'components/Pages/Welcome/ExplorePage';
import { CollectPage } from './components/Pages/Welcome/CollectPage';
import { JoinPage } from './components/Pages/Welcome/JoinPage';
import { MapPage } from 'components/Pages/MapPage';
import { routes } from 'constants/routes';
import { history } from 'utils/history';

export const App = () => (
	<Router history={history}>
		<div>
			<Route path={routes.WELCOME_EXPLORE} component={ExplorePage}/>
			<Route path={routes.WELCOME_COLLECT} component={CollectPage}/>
			<Route path={routes.WELCOME_JOIN} component={JoinPage}/>
			<Route path={routes.MAP} component={MapPage}/>
		</div>
	</Router>
);


