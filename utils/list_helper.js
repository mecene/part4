const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
    const likes = blogs.map(value => value.likes)
    return likes.reduce((a,c) => a + c, 0)
  }
  
  module.exports = {
    dummy,
    totalLikes
  }