import React from 'react';

export const Context = React.createContext(null);

// hoc component
export const withFirebase = Component => props => (
	<Context.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</Context.Consumer>
);

