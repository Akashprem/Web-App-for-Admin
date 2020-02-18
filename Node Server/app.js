var express = require('express')
var mysql = require('mysql')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()

/*var con = mysql.createConnection({
  host: "https://electiveteamone.000webhostapp.com/",
  user: "electiveamrita",
  password: "elective",
  database: "id12338909_electivemanagement"
})

con.connect(function(err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  }
  else {
    console.log("Connection successful")
  }
})*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post('/', (req, res) => {
  const data = JSON.parse(Object.keys(req.body)[0])
  if (data.u==="ADM015" && data.p==="passwordnew")
  {
    console.log("successful")
    res.send({status: "successful"})
  }
  else
  {
    console.log("unsuccessful")
    res.send({status: "unsuccessful"})
  }
})

module.exports = app