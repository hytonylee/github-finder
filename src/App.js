import React from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<NavBar />
				<Users />
			</div>
		);
	}
}

export default App;
