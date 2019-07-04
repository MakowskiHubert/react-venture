import React from 'react';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ size }) => css`calc(50% - ${size / 2}px)`};
`;

export const Spinner = props => (
		<Wrapper {...props}>
			<RingLoader {...props} />
		</Wrapper>
);

Spinner.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number
};

Spinner.defaultProps = {
	color: '#0099e5',
	size: 60
};
