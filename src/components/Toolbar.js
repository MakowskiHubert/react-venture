import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	position: ${({ position }) => position && position};
	
  ${({ top }) => top && css`
    display: flex;
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'space-between'};
    background-color: #fff;
    z-index: 500;
    width: 91.25%;
    height: ${({ theme }) => theme.size[80]};
    border-radius: ${({ theme }) => theme.size[10]};
    box-shadow: 0 ${({ theme }) => theme.size[5]} ${({ theme }) => theme.size[20]} 0 rgba(0, 0, 0, 0.3);
    margin: ${({ theme }) => theme.size[10]} auto auto;
  `};
  
  ${({ bottom }) => bottom && css`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-top: solid 1px ${({ theme }) => theme.colors.border};
    height: ${({ theme }) => theme.size[112]};
    z-index: 500;
  `};
`;

export class Toolbar extends Component {
	state = {
		activeItem: this.props.activeItem
	};

	render() {
		const { activeItem } = this.state;
		const { reversefilter } = this.props;

		const children = React.Children.map(this.props.children, (child, index) => React.cloneElement(child, {
			onClick: () => this.setState({ activeItem: index }),
			active: activeItem === index ? 1 : 0,
			reversefilter
		}));

		return <Wrapper {...this.props}>{children}</Wrapper>;
	}
}

Toolbar.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element
	]).isRequired,
	top: PropTypes.bool,
	bottom: PropTypes.bool
};

Toolbar.defaultProps = {
	top: true,
	bottom: false
};