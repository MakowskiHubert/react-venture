import React from 'react';
import styled from 'styled-components';

import { Link } from 'components/Link';
import { Button } from 'components/Button';
import { routes } from 'constants/routes';
import explore from 'assets/svg/welcome/explore.svg';
import { slideInLeft, slideInRight, slideOutLeft, slideOutRight } from 'utils/animations';


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ bc }) => bc};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  &.page-enter {
    animation: ${({ slideRight }) => slideRight ? slideInRight : slideInLeft } 0.2s forwards;
  }
  &.page-exit {
    animation: ${({ slideRight }) => slideRight ? slideOutRight : slideOutLeft } 0.2s forwards;
  }
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

export const Image = styled.img`
	width: 91vmin;
	height: 62vmin;
`;

const Submit = styled.div`
  margin-top: 10vmax;
  margin-bottom: ${({ theme }) => theme.size[20]};
`;

const ExplorePage = () => (
	<Wrapper>
		<Title>Eksploruj</Title>
		<SubTitle>
			<p>Zobacz najpiękniejsze miejsca</p>
			<p>w okolicy i na świecie.</p>
		</SubTitle>
		<Image src={explore} alt='graphic illustrating the places'/>
		<Submit>
			<Button to={routes.WELCOME_COLLECT} primary>Dalej</Button>
		</Submit>
		<Link to={routes.WELCOME_JOIN}>pomiń</Link>
	</Wrapper>
);

export default ExplorePage;