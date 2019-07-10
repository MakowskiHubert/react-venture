import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';
import styled, { css } from 'styled-components';
import { Link } from 'components/Link';

const StyledLink = styled(Link)`
	:hover {
    text-decoration: none;
    outline: none;
    text-underline: none;
  }
`;

const Wrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.size[10]};
  filter: ${({ theme, disable }) => disable && theme.filters.grayscale};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme, mt }) => mt && theme.size[mt]};
  margin-right: ${({ theme, mr }) => mr && theme.size[mr]};
  margin-bottom: ${({ theme, mb }) => mb && theme.size[mb]};
  margin-left: ${({ theme, ml }) => ml && theme.size[ml]};
  height: 100%;
  border: none;
	
  :focus,
  :active {
    outline: none;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    width: ${({ theme }) => theme.size[48]};
    height: ${({ theme }) => theme.size[48]};
  }
  
  ${({ primary }) => primary && css`
 	 	width: 55.55vmin;
 	 	height: 7vmax;
 	 	border-radius: ${({ theme }) => theme.size[10]};
 	 	background-color: ${({ theme }) => theme.colors.primary_dark};
 	 	color: #fff;
 	 	font-size: 1.5rem;
 	 	border: none;
  `}
  
  ${({ absolute }) => absolute && css`
 		position: fixed;
  	height: ${({ theme }) => theme.size[100]};
  	width: 100vw;
  	left: 0;
  	bottom: 0;
  	color: ${({ theme }) => theme.colors.primary_dark};
  	font-weight: 600;
  	background-color: #fff;
	
  	a {
  	  height: ${({ theme }) => theme.size[100]};
  	  line-height: ${({ theme }) => theme.size[100]};
    	color: ${({ theme }) => theme.colors.primary_dark};
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
  
  ${({ textual }) => textual && css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: none;
		background-color: transparent;
		color: ${({ color }) => color};
		
		:active {
	    filter: ${({ theme }) => theme.filters.iconOpacity}
	  }
	`};
	
	${({ next }) => next && css`
	  position: relative;
  	float: right;
  	width: ${({ theme }) => theme.size[112]};
  	height: ${({ theme }) => theme.size[112]};
  	border-radius: ${({ theme }) => theme.size[112]};
  	line-height: ${({ theme }) => theme.size[112]};
  	background-color: ${({ theme }) => theme.colors.secondary};
  	text-align: center;
  	margin-right: ${({ theme }) => theme.size[5]};
  	border: none;
	`}
	
	${({ signUp }) => signUp && css`
		width: 35.16vmax;
		height: 7.03vmax;
		border-radius: ${({ theme }) => theme.size[45]};
	  box-shadow: 0 0.47vmax ${({ theme }) => theme.size[20]} 0 rgba(28, 174, 238, 0.5);
	  background-image: linear-gradient(to bottom, #5983cb, #00c4ff);
	  font-size: 1.4rem;
	  font-weight: bold;
	  color: #fff;
	`}

	${({ signIn }) => signIn && css`
	 	font-family: FiraSans sans-serif;
		width: 35.16vmax;
		height: 7.03vmax;
		border-radius: ${({ theme }) => theme.size[45]};
	  border: solid ${({ theme }) => theme.size[5]} ${({ theme }) => theme.colors.tertiary};
		color: ${({ theme }) => theme.colors.tertiary};
	  font-size: 1.4rem;
	  font-weight: 500;
	`}
	
	${({ width }) => width && css`
		width: ${width}
	`}
	
	${({ height }) => height && css`
		height: ${height}
	`}
`;

export const Button = (props) => (
		props.isVisible ? props.to ? (
				<StyledLink to={props.to}>
					<Wrapper {...props}>
						{props.ink && (<Ink {...props} />)}
						{props.children}
					</Wrapper>
				</StyledLink>
		) : (
				<Wrapper {...props}>
					{props.ink && (<Ink {...props} />)}
					{props.children}
				</Wrapper>
		) : null
);

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
		PropTypes.string
	]),
	type: PropTypes.string,
	isVisible: PropTypes.bool,
	ink: PropTypes.bool,
	duration: PropTypes.number,
	color: PropTypes.string,
	mt: PropTypes.number,
	mr: PropTypes.number,
	mb: PropTypes.number,
	ml: PropTypes.number
};

Button.defaultProps = {
	children: 'Submit',
	type: 'button',
	isVisible: true,
	ink: true,
	duration: 200,
	color: '#1CAEEE'
};
