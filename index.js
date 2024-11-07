require('dotenv').config()
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const postgraphile = require('./postgraphile')

const { PORT } = process.env

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(postgraphile)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))