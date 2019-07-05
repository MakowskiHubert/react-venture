import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
		position: relative;
`;

const List = styled['ul']`
		column-count: ${({ columnCount }) => columnCount};
	  column-gap: 0;
		padding: 0;
`;

export class ListView extends Component {
	state = {
		list: this.props.list,
		activeElement: 0
	};

	nextItem = () => this.setState(prev => ({ activeElement: prev.activeElement + 1 }));

	previousItem = () => this.setState(prev => ({ activeElement: prev.activeElement - 1 }));

	render() {
		const { list, activeElement } = this.state;
		const { Component } = this.props;

		return (
				<Wrapper>
					<List {...this.props}>
						{list.map((data, index) => (
								<Component data={data} key={index} active={activeElement === index}/>
						))}
					</List>
				</Wrapper>
		);
	}
}

ListView.propTypes = {
	list: PropTypes.array.isRequired,
	Component: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func
	]).isRequired,
	columnCount: PropTypes.number
};

ListView.defaultProps = {
	columnCount: 1
};