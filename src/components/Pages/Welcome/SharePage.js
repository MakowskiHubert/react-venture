import React from 'react';
import styled, { keyframes } from 'styled-components';
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

const StyledShare = styled(ReactShare)`
  margin-top: ${({ theme }) => theme.size[20]};
  margin-bottom: 5.2vmax;
  
  .marker1 {
  	opacity: 0;
  	transform-origin: 190px 190px;
		animation: ${scale} 0.25s cubic-bezier(0.42, 0, 0.63, 1.13);
		animation-fill-mode: forwards;
		animation-delay: 0.25s;
  }
  .marker2 {
  	opacity: 0;
  	transform-origin: 190px 190px;
		animation: ${opacity} 0.25s linear;
		animation-fill-mode: forwards;
		animation-delay: 0.45s;
  }
`;

export const SharePage = ({ visible }) => {
	if (!visible) return null;

	return (
			<Wrapper>
				<StyledShare/>
				<Title>Dodawaj</Title>
				<SubTitle>
					<p>Podziel się swoimi miejscówkami</p>
				</SubTitle>
			</Wrapper>
	);
};

