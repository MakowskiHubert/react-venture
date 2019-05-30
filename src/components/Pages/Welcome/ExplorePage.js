import React from 'react';
import styled from 'styled-components';

import { Link } from 'components/Link';
import { Button } from 'components/Button';
import { routes } from 'constants/routes';
import explore from 'assets/svg/welcome/explore.svg';


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 2.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.size[200]};
`;

export const SubTitle = styled.div`
  font-size: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.light_gray_2};
  margin-top: ${({ theme }) => theme.size[20]};
  margin-bottom: ${({ theme }) => theme.size[80]};
`;

const Submit = styled.div`
  margin-top: 16.9vmax;
  margin-bottom: ${({ theme }) => theme.size[20]};
`;

export const ExplorePage = () => (
	<Wrapper>
		<Title>Eksploruj</Title>
		<SubTitle>
			<p>Zobacz najpiękniejsze miejsca</p>
			<p>w okolicy i na świecie.</p>
		</SubTitle>
		<img src={explore} alt='graphic illustrating the places'/>
		<Submit>
			<Button to={routes.WELCOME_COLLECT} primary>Dalej</Button>
		</Submit>
		<Link to={routes.MAP}>pomiń</Link>
	</Wrapper>
);