'use strict';

const express = require('express')
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const router = require('./router');
const CONFIG = require('./config');

const app = express()
app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

app.set('view engine', 'ejs');

app.listen(CONFIG.APP.PORT, CONFIG.APP.HOST)
console.log(`Running on http://${CONFIG.APP.HOST}:${CONFIG.APP.PORT}`)