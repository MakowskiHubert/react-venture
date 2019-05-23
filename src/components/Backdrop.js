import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
  height: 100%;
  position: fixed;
  z-index: 450;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Backdrop = ({ show, onClick }) =>
	show && <Wrapper onClick={onClick} />;

Backdrop.propTypes = {
	show: PropTypes.bool,
	onClick: PropTypes.func
};

