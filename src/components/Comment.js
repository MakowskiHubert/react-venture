import React, { Component } from 'react';
import author from 'assets/author.png';
import settings from 'assets/svg/star-full.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 0 ${({ theme }) => theme.size[10]} ${({ theme }) => theme.size[30]} 0 rgba(0, 0, 0, 0.2);
  padding: ${({ theme }) => theme.size[30]};
  background-color: #fff;
  margin-bottom: 4.69vmax;
  
  img {
    width: ${({ theme }) => theme.size[40]};
    height: ${({ theme }) => theme.size[40]};
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray};
  margin-left: 0.25rem;
`;

const Description = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
  padding: 1.56vmax 0;
  text-align: left;
`;

const Date = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.light_gray};
`;

const Buttons = styled.div`
      display: flex;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};

      div {
        margin-left: ${({ theme }) => theme.size[30]};
      }
`;

export class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nick: 'default',
			date: '25/11/2019'
		};
	}
	render() {
		const { children } = this.props;

		return (
			<Wrapper>
				<Section>
					<Author>
						<img src={author} alt="author" />
						<Name>Nick</Name>
					</Author>
					<img  src={settings} alt='settings' />
				</Section>
				<Description>{children}</Description>
				<Section>
					<Date>01.01.2019</Date>
					<Buttons>
						<div>CYTUJ</div>
						<div>ODPOWIEDZ</div>
					</Buttons>
				</Section>
			</Wrapper>
		);
	}
}
