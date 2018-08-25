require('dotenv').config()

const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const corsConfig = require('./config/cors')

const app = express()
app.use(cors(corsConfig))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join('public', 'uploads')))
app.use('/api', require('./src/routes'))

const HOST = process.env.HOST
const PORT = process.env.PORT
const ENV = process.env.NODE_ENV

app.listen(PORT, HOST, () =>
  console.log(
    `Server running at port: ${PORT} - Env[${ENV}] - ${new Date().toString()}`
  )
)
