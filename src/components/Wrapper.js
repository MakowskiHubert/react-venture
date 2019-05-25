import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  background-color: ${({ color }) => color};
  margin:
    ${({ mt }) => mt && `${mt}vmax`}
    ${({ mr }) => mr && `${mr}vmax`}
    ${({ mb }) => mb && `${mb}vmax`}
    ${({ ml }) => ml && `${ml}vmax`}
  padding: 
    ${({ pt }) => pt && `${pt}vmax`}
    ${({ pr }) => pr && `${pr}vmax`}
    ${({ pb }) => pb && `${pb}vmax`}
    ${({ pl }) => pl && `${pl}vmax`}
`;

export const Wrapper = ({ display, alignItems, justifyContent, mt, mr, mb, ml, pt, pr, pb, pl, color, children }) => (
	<StyledWrapper
		display={display}
		alignItems={alignItems}
		justifyContent={justifyContent}
		mt={mt} mr={mr} mb={mb} ml={ml}
		pt={pt} pr={pr} pb={pb} pl={pl}
		color={color}
	>
		{children}
	</StyledWrapper>
);

Wrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element
	]).isRequired,
	display: PropTypes.string,
	alignItems: PropTypes.string,
	justifyContent: PropTypes.string,
	mt: PropTypes.number,
	mr: PropTypes.number,
	mb: PropTypes.number,
	ml: PropTypes.number,
	pt: PropTypes.number,
	pr: PropTypes.number,
	pb: PropTypes.number,
	pl: PropTypes.number
};

Wrapper.defaultProps = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	mt: 0,
	mr: 0,
	mb: 0,
	ml: 0,
	pt: 0,
	pr: 5,
	pb: 0,
	pl: 5
};
