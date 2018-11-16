import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'

class TextArea extends Component {
  render() {
    return (
      <div style={styles.paper}>
        {
          !this.props.rooms
          ? <h1 style={styles.noRooms}>No room selected<br />Select or Join a room to get started</h1>
          : <h1>stuff</h1>
        }
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  noRooms: {
    width: '65%',
    marginTop: '40%',
    textAlign: 'center'
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms.length
})

export default TextArea
