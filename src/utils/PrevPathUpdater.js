import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePreviousPath } from 'ducks/user';

// actually only for TransitionGroup
class PrevPathUpdater extends Component {
	UNSAFE_componentWillReceiveProps(nextProps) {
  	const pathname = this.props.children[0].props.children.props.location.pathname;
  	const { length } = this.props.children;
  	const { updatePreviousPath, previousPath } = this.props;

  	if (nextProps !== this.props && length === 1 && pathname !== previousPath) {
  		updatePreviousPath(pathname);
  	}
	}

	render() {
  	return this.props.children;
	}
}

const mapStateToProps = ({user}) => ({
	previousPath: user.previousPath
});

export default withRouter(
	connect(mapStateToProps, { updatePreviousPath })(PrevPathUpdater)
);