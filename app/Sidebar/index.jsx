import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageHeader } from 'react-bootstrap'

import AddRoom from './addRoom'

class Sidebar extends Component {
  render() {
    const roomNum = this.props.rooms.length
    const noRooms = (
      <p style={styles.noRooms}>
        Join a room by clicking the button below.
      </p>
      )
    return (
      <div style={styles.paper}>
        <PageHeader style={styles.pageHeader}>
          Rooms
        </PageHeader>
        <div style={styles.listDiv}>
          {noRooms}
          <AddRoom />
        </div>
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
    minWidth: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  pageHeader: {
    textAlign: 'center',
    margin: '0',
  },
  noRooms: {
    textAlign: 'center',
    width: '80%',
    fontStyle: 'italic',
    margin: 'auto',
    flexGrow: 1
  },
  listDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 10
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
