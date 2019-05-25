import React from 'react';
import PropTypes from 'prop-types';
import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #eeeff2;
  z-index: 400;
`;

export const Spinner = ({ loading, size, color }) => (
	loading && (
		<Wrapper>
			<MoonLoader size={size} color={color} />
		</Wrapper>
	)
);

Spinner.propTypes = {
	loading: PropTypes.bool.isRequired
};

Spinner.defaultProps = {
	color: '#0099e5',
	size: 28
};
