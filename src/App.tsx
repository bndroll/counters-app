import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';


function App(): JSX.Element {
	return (
		<Wrapper>
			<Header/>
			<Content>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Content>
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  padding: 2rem 0;
`;
