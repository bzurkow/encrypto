import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Glyphicon, PageHeader } from 'react-bootstrap'

class AddRoom extends Component {
  render() {
    return (
      <div style={styles.div}>
          <Button bsStyle="primary" style={styles.btn}>
            <h4 style={styles.btnText}>Add Room</h4>
          </Button>
      </div>
    )
  }
}

const styles = {
  div: {
    alignSelf: 'flex-end',
    width: '100%'
  },
  btn: {
    width: '100%'
  },
  btnText: {
    margin: '0'
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AddRoom)
