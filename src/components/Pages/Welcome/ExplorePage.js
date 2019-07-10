import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as ReactExplore } from 'assets/svg/welcome/explore.svg';

const showAfter = keyframes`
	from {
		transform: scale(0);
	} to {}
`;

const scaleOpacity = (translateX, translateY) => keyframes`
	from {
			opacity: 1;
			transform: translate(${translateX}px, ${translateY}px) scale(0);
		}
	to {
		opacity: 0;
		transform: translate(${translateX}px, ${translateY}px) scale(1.5);
	}
`;

const SvgExplore = styled(ReactExplore)`
	 width: 35.7vmax;
	 height: 18.28vmax;
	 margin-top: ${({ theme }) => theme.size[80]};
	 margin-bottom: 10.5vmax;
	
	 ${({ animate }) => animate && css`
		.markers > circle {
	    transform-origin: 50px 50px;
			
			:nth-child(1) {
				animation: ${scaleOpacity(35.632, 52.718)} 0.5s linear 0.6s;
			}
			:nth-child(2) {
				animation: ${scaleOpacity(204.632, 128.718)} 0.5s linear 0.6s;
			}
			:nth-child(3) {
				animation: ${scaleOpacity(83.632, 167.118)} 0.5s linear 0.6s;
			}
			:nth-child(4) {
				animation: ${scaleOpacity(285.632, 52.718)} 0.5s linear 0.6s;
			}
			:nth-child(5) {
				animation: ${scaleOpacity(376.632, 184.118)} 0.5s linear 0.6s;
			}
		}
		.markers > path {
			animation: ${showAfter} 1.2s linear;
		}
	`};
`;

export const Wrapper = styled.div`
	position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ bc }) => bc};
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Fira Sans Condensed', sans-serif;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 17.5vmax};
`;

export const SubTitle = styled.div`
  font-size: 1.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.light_gray_2};
  margin-top: ${({ theme }) => theme.size[30]};
  margin-bottom: ${({ theme }) => theme.size[80]};
`;

export const ExplorePage = ({ isStartAnimation }) => (
		<Wrapper>
			<SvgExplore animate={isStartAnimation}/>
			<Title>Eksploruj</Title>
			<SubTitle>
				<p>Zobacz najpiękniejsze miejsca</p>
				<p>w okolicy i na świecie</p>
			</SubTitle>
		</Wrapper>
);

