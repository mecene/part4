const mongoose = require('mongoose')
const logger = require('../utils/logger')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  
  const Blog = mongoose.model('Blog', blogSchema)


module.exports = mongoose.model('Blog', blogSchema)
  


