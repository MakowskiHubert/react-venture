import React, { Component } from 'react';
import ReactSelect from 'react-select';
import { components } from 'react-select';
import styled from 'styled-components';

import flagOfPoland from 'assets/svg/flag-of-poland.svg';
import flagOfFrance from 'assets/svg/flag-of-france.svg';
import flagOfSpain from 'assets/svg/flag-of-spain.svg';
import flagOfChina from 'assets/svg/flag-of-china.svg';
import flagOfItaly from 'assets/svg/flag-of-italy.svg';

const options = [
	{ value: 'polska', label: 'Polska', img: flagOfPoland, alt: 'Flag of Poland' },
	{ value: 'francja', label: 'Francja', img: flagOfFrance, alt: 'Flag of France' },
	{ value: 'hiszpania', label: 'Hiszpania', img: flagOfSpain, alt: 'Flag of Spain' },
	{ value: 'chiny', label: 'Chiny', img: flagOfChina, alt: 'Flag of China' },
	{ value: 'wlochy', label: 'Włochy', img: flagOfItaly, alt: 'Flag of Italy' }
];

const selectCustomStyles = {
	control: styles => ({
		...styles,
		borderWidth: 0,
		backgroundColor: '#eeeeee',
		borderRadius: '1.56vmax',
		height: '6.25vmax',
		fontSize: '1.4rem'
	}),
	option: styles => ({ ...styles }),
	singleValue: styles => ({ ...styles, marginLeft: '1.56vmax' })
};

const StyledSelect = styled(ReactSelect)`
	width: 82%;
	margin-right: ${({ theme }) => theme.size[30]};;
`;

const Image = styled.img`
	width: ${({ theme }) => theme.size[20]};
  height: ${({ theme }) => theme.size[20]};
  margin-right: ${({ theme }) => theme.size[10]};
  margin-bottom: -4px;
`;

const { Option } = components;
const IconOption = props => (
		<Option {...props}>
			<Image src={props.data.img} alt={props.data.alt}/>
			{props.data.label}
		</Option>
);

export class Select extends Component {
	state = {
		selectedOption: options[0]
	};

	handleCountryChange = selectedOption => {
		this.setState({ selectedOption });
		this.props.onChange();
	};

	render() {
		const { selectedOption } = this.state;
		const { isLoading } = this.props;

		return (
				<StyledSelect
						value={selectedOption}
						onChange={this.handleCountryChange}
						isLoading={isLoading}
						isSearchable={false}
						options={options}
						styles={selectCustomStyles}
						components={{ Option: IconOption }}
				/>
		);
	}
}
