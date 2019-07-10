import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Wrapper, Title, SubTitle } from './ExplorePage';
import { ReactComponent as ReactBox } from 'assets/svg/welcome/collect.svg';

const TitleWrapper = styled(Title)`
  margin-top: ${({ theme }) => theme.size[300]};
`;

const SubTitleWrapper = styled(SubTitle)`
  margin-bottom: 9.25vmax;
`;

const translateY = (a, b, c, d, e, f, value) => keyframes`
	from {
		transform: matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f}) translateY(${value}px);
	}
	to {
		transform: matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f}) translateY(0);
	}
`;

const SvgBox = styled(ReactBox)`
	width: 25.78vmax;
	height: 29.14vmax;
	
	${({ animate }) => animate && css`
		.markers > g {
			:nth-child(1) { 
				animation: ${translateY(0.990, -0.139, 0.139, 0.990, 88.978, 50.167, 200)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(2) {
				animation: ${translateY(0.970, 0.241, -0.241, 0.970, 145.566, 51.359, 200)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(3) {
				animation: ${translateY(0.998, -0.070, 0.070, 0.998, 82.638, 99.807, 150)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(4) {
				animation: ${translateY(0.974, -0.224, 0.224, 0.974, 40.309, 47.391, 300)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(5) {
				animation: ${translateY(0.992, -0.121, 0.121, 0.992, 89.202, 1.482, 300)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(6) {
				animation: ${translateY(0.990, 0.139, -0.139, 0.990, 144.446, 14.474, 300)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(7) {
				animation: ${translateY(0.920, 0.390, -0.390, 0.920, 137.143, 149.684, 120)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(8) {
				animation: ${translateY(0.951, -0.309, 0.309, 0.951, -0.0095, 93.299, 200)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(9) {
				animation: ${translateY(0.974, 0.224, -0.224, 0.974, 182.974, 96.393, 200)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
			:nth-child(10) {
				animation: ${translateY(0.927, -0.374, 0.374, 0.927, 30.420, 168.080, 100)} 0.75s cubic-bezier(0.42, 0, 0.63, 1.13);
			}
		}
	`};
`;

export const CollectPage = ({ isStartAnimation }) => (
		<Wrapper>
			<SvgBox animate={isStartAnimation}/>
			<TitleWrapper>Kolekcjonuj</TitleWrapper>
			<SubTitleWrapper>
				<p>Zapisuj miejsca, które wpadły Ci w oko</p>
			</SubTitleWrapper>
		</Wrapper>
);