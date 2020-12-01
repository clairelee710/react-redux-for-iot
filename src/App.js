import React from 'react'
import PageBackground from './components/PageBackground';
import PageHeader from './components/PageHeader';
import MainContainer from './pages/Main';

const App = () => (
	<div className="App">
	    <PageBackground />
	    <PageHeader />
	    <MainContainer />
	</div>    
);

export default App