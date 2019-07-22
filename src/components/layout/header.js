import React from 'react';

// This is a functional component that acts like a render
function Header() {
	return (
		<header style={headerStyle}>
			<h1>Todo List</h1>
		</header>
	)
}

const headerStyle = {
	background: '#333',
	color: '#fff', 
	textAlign: 'center', 
	padding: '10px'
}

export default Header
