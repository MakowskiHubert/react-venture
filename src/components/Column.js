import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
`;

export const Column = props => <Wrapper {...props}>{props.children}</Wrapper>;

Wrapper.propTypes = {
	ai: PropTypes.string,
	jc: PropTypes.string
};