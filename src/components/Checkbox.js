import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import radioButtonChecked from 'assets/svg/radio-button-checked.svg';
import radioButtonUnchecked from 'assets/svg/radio-button-unchecked.svg';

const Wrapper = styled.div`
  input {
    display: none;
  }
`;

const LabelWrapper = styled.label`
		margin: 0;
		padding: 0;
		display: inline-flex;
		align-items: center;
		flex-direction: ${({ direction }) => direction};
`;

const Label = styled.label`
		cursor: pointer;
		display: block;
		height: ${({ theme }) => theme.size[48]};
		width: ${({ theme }) => theme.size[48]};
		background-size: ${({ theme }) => theme.size[48]} ${({ theme }) => theme.size[48]};
		background-image: ${({ checked, fullSymbol, emptySymbol }) => checked ? `url(${fullSymbol})` : `url(${emptySymbol})`};
`;

const Text = styled.div`
		font-size: 1.5rem;
    font-weight: 500;
    font-stretch: condensed;
    line-height: 1.2;
    color: #fff;
`

export const Checkbox = ({onClick, checked, emptySymbol, fullSymbol, label, direction}) => (
	<Wrapper>
		<LabelWrapper onClick={onClick} direction={direction}>
			<Text>{label}</Text>
			<Label checked={checked} emptySymbol={emptySymbol} fullSymbol={fullSymbol} />
		</LabelWrapper>
	</Wrapper>
);

Checkbox.propTypes = {
	onClick: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
	emptySymbol: PropTypes.string,
	fullSymbol: PropTypes.string,
	label: PropTypes.string,
	direction: PropTypes.string
};

Checkbox.defaultProps = {
	emptySymbol: radioButtonUnchecked,
	fullSymbol: radioButtonChecked,
	label: '',
	direction: 'row'
};

