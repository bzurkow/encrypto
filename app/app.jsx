import React, { Component } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import TextArea from './TextArea';

class App extends Component {
	render(){
		return(
			<div style={styles.app}>
				<Header />
				<Sidebar />
				<TextArea />
			</div>
			)
	}
};

const styles = {
	app: {

	}
}

export default App