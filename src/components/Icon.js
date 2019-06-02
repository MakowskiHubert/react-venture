import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: cursive;
	padding:
		${({ pt }) => pt && `${pt}px`}
		${({ pr }) => pr && `${pr}px`}
		${({ pb }) => pb && `${pb}px`}
		${({ pl }) => pl && `${pl}px`}

  img {
    width: ${({ theme }) => theme.size[48]};
    height: ${({ theme }) => theme.size[48]};
		filter: ${({ active }) => active && 'brightness(0) invert(1)'};
  }

  p {
    margin: 0;
    font-size: 1em;
    color: ${({ theme, active }) => active ? '#fff' : theme.colors.primary};
  }
  
  :hover {
    cursor: pointer;
    filter: ${({ theme, active }) => !active && theme.filters.opacity};
  }
`;

export const Icon = ({onClick, src, alt, text, pt, pr, pb, pl, color}) =>
	<Wrapper onClick={onClick} pt={pt} pr={pr} pb={pb} pl={pl} color={color}>
		<img src={src} alt={alt}/><p>{text}</p>
	</Wrapper>;

Icon.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	text: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
	pt: PropTypes.number,
	pr: PropTypes.number,
	pb: PropTypes.number,
	pl: PropTypes.number,
	color: PropTypes.string
};

Icon.defaultProps = {
	pt: 5,
	pr: 5,
	pb: 5,
	pl: 5
};
