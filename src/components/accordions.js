function accordion() {
  // console.log("working on accordion")

  const heads = document.querySelectorAll(".accordion-title")
  // console.log(heads)
  // ArrayName: heads
  for (let i = 0; i < heads.length; i++) {
    let currentHead = heads[i]
    // console.log(currentHead)
    currentHead.addEventListener("click", () => {
      // 1. find its body
      const currentBody = currentHead.nextElementSibling
      // console.log(currentBody)

      // 2. toggle the class: show-accordion-body
      currentBody.classList.toggle("show-accordion-body")
    })
  }



}

export default accordion