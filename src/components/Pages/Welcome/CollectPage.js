import React from 'react';
import styled from 'styled-components';

import { Wrapper, Title, SubTitle } from './ExplorePage';
import { Button } from 'components/Button';
import collect from 'assets/svg/welcome/collect.svg';
import { routes } from 'constants/routes';

const SubTitleWrapper = styled(SubTitle)`
  margin-bottom: 9.25vmax;
`;

const Submit = styled.div`
  margin-top: ${({ theme }) => theme.size[200]};
  margin-bottom: ${({ theme }) => theme.size[20]};
`;

export const CollectPage = () => (
	<Wrapper>
		<Title>Kolekcjonuj</Title>
		<SubTitleWrapper>
			<p>Zapisuj miejsca, które wpadły Ci w oko.</p>
		</SubTitleWrapper>
		<img src={collect} alt='graphic illustrating the box'/>
		<Submit>
			<Button to={routes.WELCOME_JOIN} primary>Dalej</Button>
		</Submit>
	</Wrapper>
);
