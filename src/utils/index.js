const contextEmpty = function () {
	let isEmpty = false;

	for (let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'string' && !arguments[i].length) isEmpty = true;
		else if (typeof arguments[i] === 'object' && arguments[i] === null) isEmpty = true;
	}
	return isEmpty;
};

// there is at least one empty argument (string or null)
export const isAnyEmpty = function () {
	return contextEmpty.apply(this, arguments);
};

export const isValidEmail = email => {
	const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(String(email).toLowerCase());
};