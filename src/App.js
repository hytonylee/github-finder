import React from 'react';
import NavBar from './components/layout/NavBar';
import './App.css';

class App extends React.Component {
	render() {
		const name = 'John';
		const loading = false;
		const showName = true;
		return (
			<div className='App'>
				<h1>GitHub Repo Finder</h1>
				<NavBar />
				{loading ? <h4>Loading... </h4> : <h4>Hello {showName && name}</h4>}
			</div>
		);
	}
}

export default App;
