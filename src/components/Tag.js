import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  border-radius: ${({ theme }) => theme.size[30]};
  padding: 0 ${({ theme }) => theme.size[10]};

  font-size: 1rem;
  text-align: center;
  color: #fff;
  
  background-color: ${({ active }) => active ? '#66a7ff' : '#cbe1fe'};
  margin:
    ${({ mt }) => mt && `${mt}vmax`}
    ${({ mr }) => mr && `${mr}vmax`}
    ${({ mb }) => mb && `${mb}vmax`}
    ${({ ml }) => ml && `${ml}vmax`}
`;

export class Tag extends Component {
  state = {
  	active: this.props.active
  }

  onClick = () => {
  	this.setState((prev) => {
  		return { active: !prev.active };
  	});
  }

  render() {
  	const { children, mt, mr, mb, ml } = this.props;
  	const { active } = this.state;

  	return (
  		<Wrapper onClick={this.onClick} active={active} mt={mt} mr={mr} mb={mb} ml={ml}>
  			{children}
  		</Wrapper>
  	);
  }
}

Tag.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	mt: PropTypes.number,
	mr: PropTypes.number,
	mb: PropTypes.number,
	ml: PropTypes.number,
};

Tag.defaultProps = {
	active: false,
	mt: 0.78,
	mr: 1.17,
	mb: 0.78,
	ml: 1.17,
};