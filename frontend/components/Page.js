import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const theme = {
	red: '#e65c00',
	black: '#393939',
	grey: '#3a3a3a',
	lightgrey: '#e1e1e1',
	offWhite: '#ededed',
	maxWidth: '1200px',
	bs: '0 21px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
	background: white;
	color: black;
`;

const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
	background-color: red;
`;

class Page extends React.Component {
  render() {
		return (
			 <StyledPage>
				<Meta />
				<Header />
					<Inner>
						{this.props.children}
					</Inner>
			</StyledPage>
		)
  }
}

export default Page;