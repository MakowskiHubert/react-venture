import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Wrapper, Title, SubTitle } from './ExplorePage';
import { ReactComponent as ReactShare } from 'assets/svg/welcome/share.svg';

const scale = keyframes`
	from {
		opacity: 1;
		transform: scale(0);
	}
	to {
		opacity: 1;
		transform: scale(100%);
	}
`;

const opacity = keyframes`
	from {
		opacity: 1;
		transform: scale(1);
	}
	to {
		opacity: 0;
		transform: scale(2);
	}
`;

const SvgShare = styled(ReactShare)`
	width: 17.81vmax;
	height: 28.36vmax;
  margin-top: ${({ theme }) => theme.size[20]};
  margin-bottom: 5.2vmax;
  
	${({ animate }) => animate && css`
	  .marker1 {
	    opacity: 0;
	    transform-origin: 190px 190px;
			animation: ${scale} 0.25s cubic-bezier(0.42, 0, 0.63, 1.13) 0.25s forwards;
	  }
	  .marker2 {
	    opacity: 0;
	    transform-origin: 190px 190px;
			animation: ${opacity} 0.25s linear 0.45s forwards;
	  }
	`}
`;

export const SharePage = ({ isStartAnimation }) => (
		<Wrapper>
			<SvgShare animate={isStartAnimation}/>
			<Title>Dodawaj</Title>
			<SubTitle>
				<p>Podziel się swoimi miejscówkami</p>
			</SubTitle>
		</Wrapper>
);
