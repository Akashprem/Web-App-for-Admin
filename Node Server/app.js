const express = require('express')
var mysql = require('mysql')
const app = express()

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
})

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;