import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'

class TextArea extends Component {
  render() {
    return (
      <div style={styles.paper}>
        <h1>text area</h1>
      </div>
    )
  }
}

const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
const width = w*0.2<=150 ? 'calc(100vw - 150px)' : '80vw'

const styles = {
  paper: {
    backgroundColor: '#626262',
    width: width,
    float: 'right',
    height: `calc(100vh - 71px)`,
  }
}

export default TextArea
