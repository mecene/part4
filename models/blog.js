const mongoose = require('mongoose')
const logger = require('../utils/logger')
const {MONGODB_URI} = require('../utils/config')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  
  const Blog = mongoose.model('Blog', blogSchema)

  mongoose.connect(MONGODB_URI)
    .then(() => {
      logger.info('connected to the DB')
    })
    .catch((error) => {
      logger.info(`ERROR : ${error}`)
    })

module.exports = mongoose.model('Blog', blogSchema)
  


