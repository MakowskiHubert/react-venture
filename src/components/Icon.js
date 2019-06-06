import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'components/Link';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: cursive;
	padding:
		${({ pt, theme }) => pt && theme.size[pt]}
		${({ pr, theme }) => pr && theme.size[pr]}
		${({ pb, theme }) => pb && theme.size[pb]}
		${({ pl, theme }) => pl && theme.size[pl]}

  img {
    width: ${({ theme }) => theme.size[48]};
    height: ${({ theme }) => theme.size[48]};
		filter: ${({ active }) => active && 'brightness(0) invert(1)'};
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: normal;
    color: ${({ theme, active }) => active ? '#fff' : theme.colors.primary};
  }
  
  :hover {
    cursor: pointer;
    filter: ${({ theme, active }) => !active && theme.filters.opacity};
  }
`;

export const Icon = ({onClick, src, alt, text, to, pt, pr, pb, pl, color}) =>
	to ? (
		<Wrapper as={Link} to={to} onClick={onClick} pt={pt} pr={pr} pb={pb} pl={pl} color={color}>
			<img src={src} alt={alt}/><p>{text}</p>
		</Wrapper>
	) : (
		<Wrapper onClick={onClick} pt={pt} pr={pr} pb={pb} pl={pl} color={color}>
			<img src={src} alt={alt}/><p>{text}</p>
		</Wrapper>
	);

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
