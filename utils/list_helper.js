const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
    const likes = blogs.map(value => value.likes)
    return likes.reduce((a,c) => a + c, 0)
  }

  const favoriteBlog  = (blogs1) => {
    const mostLikes = blogs1.reduce((a, c) => {
      console.log(a.likes, c.likes)
      return a.likes >  c.likes ? a : c
     
    })
    const {_id, url,__v, ...mostLikesReduced} = mostLikes
    return mostLikesReduced
  }
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }