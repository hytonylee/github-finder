import React from 'react';
import NavBar from './components/layout/NavBar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<NavBar />
				<UserItem />
			</div>
		);
	}
}

export default App;
