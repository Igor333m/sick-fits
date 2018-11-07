import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
	background: red;
	font-size: ${props => props.huge ? '100px' : '50px'};
`;

class Page extends React.Component {
  render() {
		return (
			 <div>
				<Meta />
				<Header />
				<MyButton huge>Click Me</MyButton>
				<MyButton>Click Me</MyButton>
				{this.props.children}
			</div>
		)
  }
}

export default Page;