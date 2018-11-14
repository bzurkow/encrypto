import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

class TextArea extends Component {
	constructor(props){
		super(props);
	};

	render(){
		return(
			<div style={styles.paper}>
				<h1>text area</h1>
			</div>
			)
	};
};

let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
console.log(w*.2<=150)

let width = w*.2<=150 ? 'calc(100vw - 150px)' : '80vw'

const styles = {
	paper: {
		backgroundColor: '#626262',
		width: width,
		float: 'right',
		height: `calc(100vh - 71px)`,
	}
}

export default TextArea;
