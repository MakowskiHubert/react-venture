import React from 'react';
import { connect } from 'react-redux';

import { withFirebase } from 'components/Firebase';
import { routes } from 'constants/routes';
import { history } from 'components/history';

export const withAuthorization = condition => Component => {
	class WithAuthorization extends React.Component {
		componentDidMount () {
			const { firebase } = this.props;

			this.listener = firebase.auth.onAuthStateChanged(
				authUser => {
					if (!condition(authUser)) {
						history.push(routes.SIGN_IN);
					}
				}
			);
		}

		componentWillUnmount () {
			this.listener();
		}

		render () {
			const { isLogged } = this.props.user;

			return (
				condition(isLogged) ? <Component {...this.props} /> : null
			);
		}
	}

	const mapStateToProps = ({ user }) => ({ user });

	return withFirebase(
		connect(mapStateToProps)(WithAuthorization)
	);
};
