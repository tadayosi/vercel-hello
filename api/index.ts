import express from 'express'
import pkg from '../package.json'

const app = express()

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send({ name: pkg.name, version: pkg.version })
})

app.get('/api/hello/:name', (req, res) => {
  const { name } = req.params
  res.setHeader('Content-Type', 'application/json')
  res.send({ message: `Hello ${name}!` })
})

export default app
