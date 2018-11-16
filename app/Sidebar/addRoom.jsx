import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Glyphicon, Modal, PageHeader } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'

class AddRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.join = this.join.bind(this)
    this.change = this.change.bind(this)
  }

  open() {
    this.setState({show: true})
  }

  close() {
    this.setState({show: false})
  }

  join(e) {
    e.preventDefault()
    console.log(this.state)
  }

  change(e, key) {
    e.preventDefault()
    const newState = {}
    newState[key] = e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <div style={styles.div}>
          <Button bsStyle="primary" style={styles.btn} onClick={this.open}>
            <h4 style={styles.btnText}>Join Room</h4>
          </Button>
          <Modal show={this.state.show} onHide={this.close} >
            <Modal.Header>
              <Modal.Title>
                Join Room
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <p>Room</p>
                <TextField className='room' style={styles.textField} onChange={(e) => this.change(e, 'room')}/>
                <br /><br />
                <p>Encryption Key</p>
                <TextField className='key' style={styles.textField} onChange={(e) => this.change(e, 'key')}/>
                <br /><br />
                <Button type='submit' bsStyle='success' style={styles.joinBTN} onClick={this.join}>
                <h4>Join room</h4>
              </Button>
            </form>
            </Modal.Body>
          </Modal>
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
  },
  textField: {
    width: '100%',
    maxWidth: '450px'
  },
  joinBTN: {
    clear: 'both'
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AddRoom)
