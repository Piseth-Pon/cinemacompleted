// import functions from another file
import MOVIES from '../db/data.js'
import displayDetailMovie from '../components/displayDetailMovie.js'
import tabbar from '../components/tabbar.js'

window.addEventListener('DOMContentLoaded', () => {

  console.log("working on detail.js")

  const params = new URLSearchParams(window.location.search)

  const id = params.get("id")

  // console.log(id)
  // console.log(MOVIES)

  const foundMovie = MOVIES.find((movie) => movie.id == id)
  // console.log(foundMovie)

  displayDetailMovie(foundMovie)


  tabbar()
  
})