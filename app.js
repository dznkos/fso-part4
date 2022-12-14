// conect db / and router / add middlewars

const config = require('./utils/config');
const express = require('express');
const app = express()

const cors = require('cors');
const blogRouter = require('./controllers/blogs');

const logger = require('logger');

const mongoose = require('mongoose');

mongoose.connection( config.MONGODB_URI)
    .then( () => {
      logger.info('connected to MongoDB')
    })
    .catch( (error) => {
      logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app