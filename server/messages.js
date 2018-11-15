'use strict'

const db = require('APP/db')
const Message = db.model('messages')

module.exports = require('express').Router()
  .get('/:room', (req, res, next) =>
    Message.findAll({
      where: {
        room: req.params.room
      }
    })
    .then(messages => res.json(messages))
    .catch(next))
  .post('/', (req, res, next) =>
  Message.create(req.body)
    .then(message => res.status(201).json(message))
    .catch(next))
