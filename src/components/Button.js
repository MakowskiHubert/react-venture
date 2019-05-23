import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';
import styled, { css } from 'styled-components';

const Wrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-weight: 500;
  font-size: 1.5rem;
  filter: ${({ theme, disable }) => disable && theme.filters.grayscale };
  color: #fff;
  border: none;
  margin-top: ${({ theme, mt }) => mt && theme.size[mt] };
  margin-right: ${({ theme, mr }) => mr && theme.size[mr] };
  margin-bottom: ${({ theme, mb }) => mb && theme.size[mb] };
  margin-left: ${({ theme, ml }) => ml && theme.size[ml] };

  :focus,
  :active {
    outline: none;
    border: none;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    width: ${({ theme }) => theme.size[48] };
    height: ${( { theme }) => theme.size[48] };
  }
  
  ${({ primary }) => primary && css`
 	 	width: 55.55vmin;
 	 	height: 7vmax;
 	 	border-radius: ${( { theme }) => theme.size[50] };
 	 	background-color: ${( { theme }) => theme.colors.secondary };
 	 	font-size: 1.5rem;
 	 	border: none;
  `}
  
  ${({ link }) => link && css`
 		position: fixed;
  	height: ${( { theme }) => theme.size[100] };
  	width: 100vw;
  	left: 0;
  	bottom: 0;
  	color: ${( { theme }) => theme.colors.primary_dark };
  	font-weight: 600;
  	background-color: #fff;
	
  	a {
  	  height: ${( { theme }) => theme.size[100] };
  	  line-height: ${( { theme }) => theme.size[100] };
    	color: ${( { theme }) => theme.colors.primary_dark };
  	  outline: none;
    	border: none;
    	text-decoration: none;
  	  width: 100vw;
  	  z-index: 1;
  	  
  	  ${({ disable }) => disable && css`
  			cursor: default;
  	  	pointer-events: none;
  			text-decoration: none;
  	  `}
  	}
	`}
	
	${({ next }) => next && css`
	  position: relative;
  	float: right;
  	width: ${( { theme }) => theme.size[112] };
  	height: ${( { theme }) => theme.size[112] };
  	border-radius: ${( { theme }) => theme.size[112] };
  	line-height: ${( { theme }) => theme.size[112] };
  	background-color: ${( { theme }) => theme.colors.secondary };
  	text-align: center;
  	margin-right: ${( { theme }) => theme.size[5] };
  	border: none;
	`}
	
	${({ login }) => login && css`
		box-shadow: 0 0 1.5rem 0 ${( { theme }) => theme.colors.primary_dark };
  	background-color: ${( { theme }) => theme.colors.primary_dark };
	`}
`;

export const Button = (props) => (
	<Wrapper {...props}>
		{!props.disable && (<Ink />)}
		{props.children}
	</Wrapper>
);

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
	type: PropTypes.string,
	disable: PropTypes.bool
};

Button.defaultProps = {
	children: 'Submit',
	type: 'button',
	disable: false
};
