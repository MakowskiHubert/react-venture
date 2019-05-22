import React from 'react';

export const Context = React.createContext(null);

// hoc component
// eslint-disable-next-line react/display-name
export const withFirebase = Component => props => (
	<Context.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</Context.Consumer>
);

