import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	margin-top: ${({ theme }) => theme.size[30]};
`;

const Title = styled['h1']`
	position: absolute;
	left: 8.33vw;
	bottom: 2.73vh;
  font-size: 1.4rem;
  font-weight: bold;
  font-style: italic;
  color: #fff;
  z-index: 1;
`;

const Image = styled.img`
	filter: brightness(0.6);
	height: ${({ theme }) => theme.size[150]};
 	border-radius: ${({ theme }) => theme.size[20]};
	width: 91vw;
`;

export const CategoryItem = ({ data }) => (
	<Wrapper>
		<Title>{data.name}</Title>
		<Image src={data.image} alt={'Kategoria ' + data.name}/>
	</Wrapper>
);