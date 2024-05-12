// import functions from another file

import sidenav from "../components/sidenav.js"
import carousel from "../components/carousel.js"
import displayMovies from "../components/displayMovies.js"

window.addEventListener('DOMContentLoaded', () => {
  console.log("working on movie page")
  sidenav()
  carousel()

  displayMovies()


})