'use strict'

const { STRING, TEXT } = require('sequelize')

module.exports = db => db.define('messages', {
  name: STRING,
  message: TEXT,
  room: STRING
});
