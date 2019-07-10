import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	
  img {
    width: ${({ theme, width }) => width ? theme.size[width] : theme.size[48]};
    height: ${({ theme, height }) => height ? theme.size[height] : theme.size[48]};
  
	  :active {
	    filter: ${({ theme }) => theme.filters.iconOpacity}
	  }
  }
`;

export const Img = ({ src, alt, width, height, onClick, to }) => (
		to ? (
				<Wrapper as={Link} width={width} height={height} onClick={onClick} to={to}>
					<img src={src} alt={alt}/>
				</Wrapper>
		) : (
				<Wrapper width={width} height={height} onClick={onClick}>
					<img src={src} alt={alt}/>
				</Wrapper>
		)
);

Img.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	onClick: PropTypes.func
};
