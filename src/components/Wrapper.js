import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
	  display: ${({ display }) => display};
	  position: ${({ position }) => position};
		align-items: ${({ alignItems }) => alignItems};
	  justify-content: ${({ justifyContent }) => justifyContent};
	  flex-direction: ${({ flexDirection }) => flexDirection};
	  width: ${({ width }) => width};
	  height: ${({ height }) => height};
	  background-color: ${({ color }) => color};
	
		//margin
		${({ theme, margin }) => css`
				margin: ${theme.size[margin]};
		`};
		//vertical margin
		${({ theme, mv }) => css`
				margin-top: ${theme.size[mv]};
				margin-bottom: ${theme.size[mv]};
		`};
		//horizontal margin
		${({ theme, mh }) => css`
				margin-left: ${theme.size[mh]};
				margin-right: ${theme.size[mh]};
		`};
		//custom margin
		margin-top: ${({ theme, mt }) => theme.size[mt]};
		margin-right: ${({ theme, mr }) => theme.size[mr]};
		margin-bottom: ${({ theme, mb }) => theme.size[mb]};
		margin-left: ${({ theme, ml }) => theme.size[ml]};
		
		//padding
		${({ theme, padding }) => css`
						padding: ${theme.size[padding]};
				`};
		//vertical padding
		${({ theme, pv }) => css`
						padding-top: ${theme.size[pv]};
						padding-bottom: ${theme.size[pv]};
				`};
		//horizontal padding
		${({ theme, ph }) => css`
						padding-left: ${theme.size[ph]};
						padding-right: ${theme.size[ph]};
				`};
		//custom padding
		padding-top: ${({ theme, pt }) => theme.size[pt]};
		padding-right: ${({ theme, pr }) => theme.size[pr]};
		padding-bottom: ${({ theme, pb }) => theme.size[pb]};
		padding-left: ${({ theme, pl }) => theme.size[pl]};
`;

export const Wrapper = props => (
	<StyledWrapper {...props}>
		{props.children}
	</StyledWrapper>
);

Wrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element
	]).isRequired,
	display: PropTypes.string,
	position: PropTypes.string,
	alignItems: PropTypes.string,
	justifyContent: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	margin: PropTypes.number,
	mv: PropTypes.number,
	mh: PropTypes.number,
	mt: PropTypes.number,
	mr: PropTypes.number,
	mb: PropTypes.number,
	ml: PropTypes.number,
	padding: PropTypes.number,
	pv: PropTypes.number,
	ph: PropTypes.number,
	pt: PropTypes.number,
	pr: PropTypes.number,
	pb: PropTypes.number,
	pl: PropTypes.number
};
