import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';

import { Column } from 'components/Column';
import votesIcon from 'assets/svg/votes.svg';
import emptyStar from 'assets/svg/star-empty.svg';
import fullStar from 'assets/svg/star-full.svg';

const StyledWrapper = styled.div`
	display: flex;
	position: relative;
	padding: ${({ theme }) => theme.size[30]} 0;
	margin: 0 ${({ theme }) => theme.size[16]};
	border-bottom: 1px solid #ccc;
`;

const BorderMask = styled.div`
	position: absolute;
  bottom: -2px;
  left: 0;
  width: 25%;
  height: 3px;
  background-color:#fff;
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
 	margin-right: ${({ theme }) => theme.size[30]};
 	border-radius: 15px;
`;

const Votes = styled.div`
	display: flex;
	font-size: 1.5rem;
	
	img {
		margin-left: ${({ theme }) => theme.size[10]};
	}
`;

const Img = styled.img`
  width: ${({ theme, width }) => theme.size[width]};
  height: ${({ theme, height }) => theme.size[height]};
`;

export const ListItem = ({ data }) => (
	<StyledWrapper>
		<BorderMask/>
		<Column>
			<Image src={data.image} alt={'Miejsce ' + data.name}/>
		</Column>
		<Column>
			<Title>{data.title}</Title>
			<SubTitle>{data.distance} km</SubTitle>
		</Column>
		<Column ai='flex-end' jc='flex-end'>
			<Votes>{data.votes}<Img width={18} height={48} src={votesIcon} alt='Votes icon'/></Votes>
			<Rating
				initialRating={data.rating}
				emptySymbol={<Img width={30} height={30} src={emptyStar} alt="Empty star"/>}
				fullSymbol={<Img width={30} height={30} src={fullStar} alt="Full star"/>}
			/>
		</Column>
	</StyledWrapper>
);