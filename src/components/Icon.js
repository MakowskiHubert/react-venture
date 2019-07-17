import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Link } from 'components/Link';
import indicatorBar from 'assets/svg/indicator-bar.svg';

const Wrapper = styled.div`
	position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: cursive;

  img:first-child {
    width: ${({ theme, width }) => width ? theme.size[width] : theme.size[48]};
    height: ${({ theme, height }) => height ? theme.size[height] : theme.size[48]};
  }

  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
		font-family: 'Monospaced', sans-serif;
    color: ${({ theme }) => theme.colors.tertiary};
  }
  
  ${({ unlight }) => !unlight && css`
		img:first-child, p {
	    filter: ${({ reversefilter }) => reversefilter ? 'grayscale(100%) opacity(50%)' : 'none'};
	  }
	  
	  ${({ active }) => active && css`
			img:first-child, p {
	      filter: ${({ reversefilter }) => reversefilter ? 'none' : 'grayscale(100%) opacity(50%)'};
	    }
		`};
	`};
`;

const Accent = styled.img`
	position: absolute;
	width: ${({ theme }) => theme.size[150]};
	height: ${({ theme }) => theme.size[150]};
	z-index: -1;
`;

export const Icon = props =>
		props.to ? (
				<Wrapper as={Link} {...props}>
					<img src={props.src} alt={props.alt}/>
					{props.text && <p>{props.text}</p>}
					{props.accent && <Accent src={indicatorBar} alt='Accent icon'/>}
				</Wrapper>
		) : (
				<Wrapper {...props}>
					<img src={props.src} alt={props.alt}/>
					{props.text && <p>{props.text}</p>}
					{props.accent && <Accent src={indicatorBar} alt='Accent icon'/>}
				</Wrapper>
		);

Icon.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	reversefilter: PropTypes.number,
	accent: PropTypes.number,
	unlight: PropTypes.bool,
	active: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	onClick: PropTypes.func,
	text: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
	color: PropTypes.string
};

Icon.defaultProp = {
	reversefilter: 0,
	unlight: false,
	active: false,
	accent: 0
};
