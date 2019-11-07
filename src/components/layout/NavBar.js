import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-success'>
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

NavBar.defaultProps = {
	title: ' Github Repo Finder',
	icon: 'fab fa-github'
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default NavBar;
