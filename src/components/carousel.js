
let index = 0
function carousel() {
  // console.log("working on carousel")
  // select all the slides and the dots
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  // console.log(slides, dots)

  // our array name: slides, dots
  // hide all the slides and remove active dot
  for (let i = 0; i < slides.length; i++) {
    let currentSlide = slides[i]
    let currentDot = dots[i]
    currentSlide.style.display = "none"
    currentDot.classList.remove("dot-active")
  }

  // display one slide and one dot
  slides[index].style.display = "block"
  dots[index].classList.add("dot-active")
  // prepare the next index for next slide
  index = index + 1
  // check if the index reaches the last slide
  // then restart from 0 
  if (index > slides.length - 1) {
    index = 0
  }
  // recall the function after 2s to show the next slide
  setTimeout(carousel, 2000)
  
}

export default carousel