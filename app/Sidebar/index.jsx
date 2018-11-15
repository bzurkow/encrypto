import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'

class Sidebar extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div style={styles.paper}>
				<h1>Sidebar</h1>
			</div>
			)
	}
}

const styles = {
	paper: {
		backgroundColor: '#B6B5B5',
		width: '20vw',
		float: 'left',
		height: `calc(100vh - 71px)`,
		minWidth: '150px'
	}
}

export default Sidebar
