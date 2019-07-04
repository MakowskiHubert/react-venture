import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: ${({ theme }) => theme.size[200]};
	padding: ${({ theme }) => theme.size[14]};
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
 	border-radius: ${({ theme }) => theme.size[20]};
`;

export const GridItem = ({ data }) => (
	<Wrapper>
		<Image src={data.image} alt={'Krajobraz ' + data.name}/>
	</Wrapper>
);