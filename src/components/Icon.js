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
		${({ pt }) => pt && `${pt}vmax`}
		${({ pr }) => pr && `${pr}vmax`}
		${({ pb }) => pb && `${pb}vmax`}
		${({ pl }) => pl && `${pl}vmax`}

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

const Circle = styled.div`
	width: 10.94vmax;
	height: 10.94vmax;
	background-color: ${({ theme }) => theme.colors.primary_dark};
	position: absolute;
	z-index: -1;
	border: ${({ theme }) => theme.size[10]} solid #fff;
	border-radius: 10.94vmax;
	
	:before {
		background: none;
		border: 2px solid #eee;
		content: "";
		display: block;
		position: absolute;
		top: -10px;
		left: -10px;
		right: -10px;
		bottom: -10px;
		pointer-events: none;
		border-radius: 10.94vmax;
	}
`;

export const Icon = ({onClick, src, alt, text, pt, pr, pb, pl, color, active}) =>
	<Wrapper onClick={onClick} pt={pt} pr={pr} pb={pb} pl={pl} color={color} active={active}>
		<img src={src} alt={alt}/><p>{text}</p>
		{ active && <Circle /> }
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
