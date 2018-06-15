const express = require('express')
const app = express()

const path = require('path')
const bodyParser = require('body-parser')

const uploadRoutes = require('./routes/upload')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }))
app.use(express.static(path.join(__dirname, 'public')))

uploadRoutes(app)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Starting on 3000')
})