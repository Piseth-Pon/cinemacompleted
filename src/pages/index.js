// import functions from another file

import sidenav from '../components/sidenav.js'
import carousel from '../components/carousel.js'
import statistics from '../components/statistics.js'
import accordion from '../components/accordions.js'

window.addEventListener('DOMContentLoaded', () => {

  console.log("this is homepage")

  sidenav()
  carousel()
  statistics()
  accordion()
  
})