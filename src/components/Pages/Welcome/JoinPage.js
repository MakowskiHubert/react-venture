import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Wrapper, SubTitle as BaseSubTitle, Title as BaseTitle } from 'components/Pages/Welcome/ExplorePage';
import { Button } from 'components/Button';
import { Img } from 'components/Img';
import { routes } from 'constants/routes';
import { withFirebase } from 'components/Firebase';

import { ReactComponent as ReactJoin } from 'assets/svg/welcome/people-join.svg';
import arrowBack from 'assets/svg/welcome/arrow-back.svg';
import twitter from 'assets/svg/welcome/twitter.svg';
import facebook from 'assets/svg/welcome/facebook.svg';
import google from 'assets/svg/welcome/google.svg';
import line from 'assets/svg/welcome/rectangle.svg';

const fromBottomAppear = keyframes`
	from {
		transform: translateY(300px) scale(0);
	}
	to {
		transform: translateY(0) scale(1);
	}
`;

const SvgJoin = styled(ReactJoin)`
	width: 28.12vmax;
	height: 14.22vmax;
	margin-bottom: ${({ theme }) => theme.size[112]};
	animation: ${fromBottomAppear} 0.2s linear 0.5s forwards;
	transform: scale(0);
`;

const SkipWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 0;
  padding: ${({ theme }) => theme.size[45]} 2.5vmax;
`;

const Title = styled(BaseTitle)`
  margin-top: ${({ theme }) => theme.size[150]};
`;

const SubTitle = styled(BaseSubTitle)`
  margin-top: ${({ theme }) => theme.size[20]};
`;

const ContinueComponent = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #AAAAAA;
  margin-bottom: ${({ theme }) => theme.size[10]};
  
  > img {
  	width: 16.72vmax;
  }
`;

const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class JoinPage extends Component {
	render() {
		const { isStartAnimation, firebase } = this.props;

		return (
			<Wrapper>
				<SkipWrap>
					<Img src={arrowBack} alt='back' to={routes.MAIN}/>
					<Button to={routes.MAP} textual ink={false}>pomiń</Button>
				</SkipWrap>

				<Title>Dołącz do społeczności</Title>
				<SubTitle>
					<p>Zyskaj nowy wymiar eksploracji.</p>
					<p>To zajmie tylko chwileczkę :)</p>
				</SubTitle>

				<SvgJoin animate={isStartAnimation}/>

				<Button to={routes.SIGN_UP} signUp mb={30}>Zarejestruj się e-mailem</Button>
				<Button to={routes.SIGN_IN} signIn mb={80}>Zaloguj się e-mailem</Button>

				<ContinueComponent>
					<img src={line} alt='line'/>
					<p>lub kontynuuj z</p>
					<img src={line} alt='line'/>
				</ContinueComponent>

				<SocialWrapper>
					<Img onClick={() => firebase.signInWithGoogle()} src={google} alt='google sign in' width={200} height={200}/>
					<Img onClick={() => firebase.signInWithFacebook()} src={facebook} alt='facebook sign in' width={200} height={200}/>
					<Img onClick={() => firebase.signInWithTwitter()} src={twitter} alt='twitter sign in' width={200} height={200}/>
				</SocialWrapper>
			</Wrapper>
		);
	}
}

export default withFirebase(JoinPage);