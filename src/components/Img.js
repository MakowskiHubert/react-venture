import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  
	  :active {
	    filter: ${({ theme }) => theme.filters.iconOpacity}
	  }
  }
`;

export const Img = ({ src, alt, width, height, onClick }) =>
		<Wrapper width={width} height={height} onClick={onClick}>
			<img src={src} alt={alt}/>
		</Wrapper>;

Img.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	onClick: PropTypes.func
};
