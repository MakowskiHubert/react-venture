import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledLink = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
  	font-weight: 600;
  	font-size: 1.4rem;
	  outline: none;
    border: none;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary_dark};

    ${({ disable }) => disable && css`
      cursor: default;
      pointer-events: none;
      text-decoration: none;
    `}
`;
export const Link = (props) => (
	<StyledLink as={RouterLink} {...props}>
		{props.children}
	</StyledLink>
);

Link.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	])
};

Link.defaultProps = {
	children: 'Link'
};
