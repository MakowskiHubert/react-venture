import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
	
	margin-top: ${({ theme, mt }) => theme.size[mt]};
	margin-right: ${({ theme, mr }) => theme.size[mr]};
	margin-bottom: ${({ theme, mb }) => theme.size[mb]};
	margin-left: ${({ theme, ml }) => theme.size[ml]};
	
	padding-top: ${({ theme, pt }) => theme.size[pt]};
	padding-right: ${({ theme, pr }) => theme.size[pr]};
	padding-bottom: ${({ theme, pb }) => theme.size[pb]};
	padding-left: ${({ theme, pl }) => theme.size[pl]};
`;

export const Column = props => <Wrapper {...props}>{props.children}</Wrapper>;

Wrapper.propTypes = {
	ai: PropTypes.string,
	jc: PropTypes.string,
	mt: PropTypes.number,
	mr: PropTypes.number,
	mb: PropTypes.number,
	ml: PropTypes.number,
	pt: PropTypes.number,
	pr: PropTypes.number,
	pb: PropTypes.number,
	pl: PropTypes.number
};