const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.map(value => value.likes)
  return likes.reduce((a, c) => a + c, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length > 0) {
    const mostLikes = blogs.reduce((a, c) => {
      //console.log(a.likes, c.likes)
      return a.likes > c.likes ? a : c

    })
    const { _id, url, __v, ...mostLikesReduced } = mostLikes
    return mostLikesReduced
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length > 0) {
// loop over the blogs and find all blogs from one author / author with most blogs 
// use filter with a reduce
// reduce oject of author and likes
    
  }

}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}