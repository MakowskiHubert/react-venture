import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper, Title, SubTitle } from './ExplorePage';
import { Button } from 'components/Button';
import collect from 'assets/svg/welcome/collect.svg';
import { routes } from 'constants/routes';
import { connect } from 'react-redux';

const SubTitleWrapper = styled(SubTitle)`
  margin-bottom: 9.25vmax;
`;

const Submit = styled.div`
  margin-top: ${({ theme }) => theme.size[200]};
  margin-bottom: ${({ theme }) => theme.size[20]};
`;

class CollectPage extends Component {
	state = {
		isNextSlide: false
	};

	render() {
		const { previousPath } = this.props;
		const { isNextSlide } = this.state;

		const isPrevCollectInBack = previousPath === routes.WELCOME_EXPLORE || previousPath === routes.WELCOME_COLLECT;
		const isPrevCollectInNext = previousPath === routes.WELCOME_EXPLORE;

		return (
			<Wrapper slideRight={isNextSlide ? isPrevCollectInNext : isPrevCollectInBack} bc="#c4e6ff">
				<Title>Kolekcjonuj</Title>
				<SubTitleWrapper>
					<p>Zapisuj miejsca, które wpadły Ci w oko.</p>
				</SubTitleWrapper>
				<img src={collect} alt='graphic illustrating the box'/>
				<Submit>
					<Button onClick={() => this.setState({isNextSlide: true})} to={routes.WELCOME_JOIN} primary>Dalej</Button>
				</Submit>
			</Wrapper>
		);
	}
}

const mapStateToProps = ({user}) => ({
	previousPath: user.previousPath
});

export default connect(mapStateToProps)(CollectPage);