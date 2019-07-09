import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import { ExplorePage } from 'components/Pages/Welcome/ExplorePage';
import { CollectPage } from 'components/Pages/Welcome/CollectPage';
import { SharePage } from 'components/Pages/Welcome/SharePage';
import { Button } from 'components/Button';
import { Img } from 'components/Img';
import prevIcon from 'assets/svg/welcome/navigate-prev.svg';
import nextIcon from 'assets/svg/welcome/navigate-next.svg';
import backgroundImage from 'assets/svg/welcome/welcome-background.svg';
import { background } from 'constants/mixins';
import { routes } from 'constants/routes';

const Wrapper = styled.div`
  width: 100%;
	position: relative;
	padding-top: ${({ theme }) => theme.size[150]};
	${background(backgroundImage)};
`;

const SkipWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  top: 0;
  padding-top: ${({ theme }) => theme.size[85]};
  padding-right: 2.5vmax;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isFirstSlide }) => isFirstSlide ? 'flex-end' : 'space-between'};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  height: ${({ theme }) => theme.size[112]};
  width: 100%;
  bottom: 0;
`;

const Ul = styled.ul`
  position: fixed;
  bottom: 0;
  margin-bottom: calc(4.37vmax - 12px);
`;

const CustomDots = styled.button`
	pointer-events: none;
	
	:before {
		font-size: 20px !important;
		color: #1caeee !important;
	}
`;

export class WelcomePage extends Component {
	state = {
		currentSlide: 0
	};

	handleChangeSlide = (oldIndex, newIndex) => {
		this.setState({ currentSlide: newIndex });
	};

	handlePrevious = () => {
		this.slider.slickPrev();
	};

	handleNext = () => {
		this.slider.slickNext();
	};

	render() {
		const { currentSlide } = this.state;

		const settings = {
			ref: ref => (this.slider = ref),
			beforeChange: this.handleChangeSlide,
			initialSlide: currentSlide,
			speed: 500,
			swipe: false,
			infinite: false,
			arrows: false,
			dots: true,
			fade: true,
			appendDots: dots => <Ul>{dots}</Ul>,
			customPaging: () => <CustomDots/>
		};

		return (
				<Wrapper>
					<SkipWrap>
						<Button to={routes.JOIN} textual ink={false} color='#fff'>pomiń</Button>
					</SkipWrap>

					<Slider {...settings}>
						<ExplorePage visible={currentSlide === 0 ? 1 : 0}/>
						<CollectPage visible={currentSlide === 1 ? 1 : 0}/>
						<SharePage visible={currentSlide === 2 ? 1 : 0}/>
					</Slider>

					<ButtonWrap isFirstSlide={!currentSlide}>
						<Button onClick={this.handlePrevious} textual ink={false} isVisible={!!currentSlide}>
							<Img src={prevIcon} alt='Previous'/>
							<p>WSTECZ</p>
						</Button>
						<Button onClick={this.handleNext} textual ink={false}>
							<p>DALEJ</p>
							<Img src={nextIcon} alt='Next'/>
						</Button>
					</ButtonWrap>
				</Wrapper>
		);
	}
}
