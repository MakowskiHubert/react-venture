const UPDATE_AUTHORIZATION = 'user/UPDATE_AUTHORIZATION';

const initialState = {
	isLogged: false
};

export default (state = initialState, action) => {
	switch (action.type) {
	case UPDATE_AUTHORIZATION:
		return {
			...state,
			isLogged: action.boolean
		};

	default:
		return state;
	}
};

export const updateAuth = boolean => {
	return { type: UPDATE_AUTHORIZATION, boolean };
};
