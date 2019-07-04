import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';

import { Column } from 'components/Column';
import votesIcon from 'assets/svg/votes.svg';
import emptyStar from 'assets/svg/star-empty.svg';
import fullStar from 'assets/svg/star-full.svg';

const Wrapper = styled.div`
	display: flex;
	position: relative;
	margin-top: ${({ theme }) => theme.size[30]};
`;

const Title = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const SubTitle = styled.p`
  font-size: 1.6rem;
  color: #AAAAAA;
`;

const Image = styled.img`
	filter: brightness(0.6);
	width: ${({ theme }) => theme.size[150]};
	height: ${({ theme }) => theme.size[150]};
 	border-radius: ${({ theme }) => theme.size[100]};
 	margin-right: ${({ theme }) => theme.size[30]};
`;

const Votes = styled.div`
	display: flex;
	font-size: 1.5rem;
	
	img {
		margin-left: ${({ theme }) => theme.size[10]};
	}
`;

export const ListItem = ({ data }) => (
		<Wrapper>
			<Image src={data.image} alt={'Miejsce ' + data.name}/>
			<Column>
				<Title>{data.title}</Title>
				<SubTitle>{data.distance} km</SubTitle>
			</Column>
			<Column ai='flex-end' jc='flex-end'>
				<Votes>{data.votes}<img src={votesIcon} alt='Votes icon'/></Votes>
				<Rating
						initialRating={data.rating}
						emptySymbol={<img src={emptyStar} alt="Empty star"/>}
						fullSymbol={<img src={fullStar} alt="Full star"/>}
				/>
			</Column>
		</Wrapper>
);