import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => (
	<Navbar style={styles.appbar}>
		<h1>Encrypto</h1>
	</Navbar>
)

export default Header


const styles = {
	appbar: {
		backgroundColor: '#000',
		color: '#fff',
		fontFamily: 'roboto',
		padding: '0 10%',
		borderColor: '#000',
		borderRadius: '0px',
		marginBottom: '0px'
	}
}