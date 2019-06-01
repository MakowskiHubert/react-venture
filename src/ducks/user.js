const UPDATE_AUTHORIZATION = 'user/UPDATE_AUTHORIZATION';
const UPDATE_PREVIOUS_PATH = 'user/UPDATE_PREVIOUS_PATH';
const UPDATE_CACHE_MEMORY = 'user/UPDATE_CACHE_MEMORY';

const initialState = {
	isLogged: false,
	previousPath: '',
	isCacheClear: true
};

export default (state = initialState, action) => {
	switch (action.type) {
	case UPDATE_AUTHORIZATION:
		return {
			...state,
			isLogged: action.isLogged
		};
	case UPDATE_PREVIOUS_PATH:
		return {
			...state,
			previousPath: action.pathname
		};
	case UPDATE_CACHE_MEMORY:
		return {
			...state,
			isCacheClear: action.isClear
		};
	default:
		return state;
	}
};

export const updateAuth = isLogged => {
	return { type: UPDATE_AUTHORIZATION, isLogged };
};

export const updatePreviousPath = pathname => {
	return { type: UPDATE_PREVIOUS_PATH, pathname };
};

export const updateCacheMemory = isClear => {
	return { type: UPDATE_CACHE_MEMORY, isClear };
};
