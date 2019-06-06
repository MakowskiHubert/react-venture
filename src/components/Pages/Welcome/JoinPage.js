import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Wrapper, Title, SubTitle, Image } from './ExplorePage';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import join from 'assets/svg/welcome/join.svg';
import { routes } from 'constants/routes';
import { updateCacheMemory } from 'ducks/user';

const Submit = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.size[200]};
  margin-bottom: ${({ theme }) => theme.size[20]};
  
  > a:first-child {
    margin-right: ${({ theme }) => theme.size[20]};
  }
`;

class JoinPage extends Component {
	state = {
		isNextSlide: false
	};

	handleNext = () => {
		const { updateCacheMemory } = this.props;
		this.setState({isNextSlide: true});
		updateCacheMemory(false);
	};

	render() {
		const { previousPath } = this.props;
		const { isNextSlide } = this.state;

		const isPrevCollectInBack = previousPath === routes.WELCOME_COLLECT || previousPath === routes.WELCOME_JOIN;
		const isPrevCollectInNext = previousPath === routes.WELCOME_COLLECT;

		return (
			<Wrapper slideRight={isNextSlide ? isPrevCollectInNext : true}>
				<Title>Dołącz do społeczności</Title>
				<SubTitle>
					<p>Zyskaj nowy wymiar eksploracji.</p>
					<p>To zajmie tylko chwileczkę :)</p>
				</SubTitle>
				<Image src={join} alt='graphic illustrating the social'/>
				<Submit>
					<Button onClick={this.handleNext} to={routes.MAP}>Nie dołączaj</Button>
					<Button onClick={this.handleNext} to={routes.SIGN_UP} primary width='44.15vmin'>Dołącz</Button>
				</Submit>
				<Link onClick={this.handleNext} to={routes.SIGN_IN}>mam już konto</Link>
			</Wrapper>
		);
	}
}

const mapStateToProps = ({user}) => ({
	previousPath: user.previousPath
});

export default connect(mapStateToProps, {updateCacheMemory})(JoinPage);
