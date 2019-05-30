import React from 'react';
import styled from 'styled-components';

import { Wrapper, Title, SubTitle } from './ExplorePage';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import join from 'assets/svg/welcome/join.svg';
import { routes } from 'constants/routes';

const Submit = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.size[200]};
  margin-bottom: ${({ theme }) => theme.size[20]};
  
  > a:first-child {
    margin-right: ${({ theme }) => theme.size[20]};
  }
`;

export const JoinPage = () => (
	<Wrapper>
		<Title>Dołącz do społeczności</Title>
		<SubTitle>
			<p>Zyskaj nowy wymiar eksploracji.</p>
			<p>To zajmie tylko chwileczkę :)</p>
		</SubTitle>
		<img src={join} alt='graphic illustrating the social'/>
		<Submit>
			<Button to={routes.MAP}>Nie dołączaj</Button>
			<Button to={routes.SIGN_UP} primary width='44.15vmin'>Dołącz</Button>
		</Submit>
		<Link to={routes.SIGN_IN}>mam już konto</Link>
	</Wrapper>
);
