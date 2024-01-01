const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.send('Hello API')
})

app.get('/api/hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send({ message: 'Hello!' })
})

module.exports = app
