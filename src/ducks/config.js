import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './user';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	user
});

export const store = createStore(
	reducers,
	composeEnhancer(applyMiddleware(thunk))
);
