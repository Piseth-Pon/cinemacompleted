
function statistics() {

  console.log('working on statistics')
  const stats = document.querySelectorAll(".stat")
  // console.log(stats)


  for (let i = 0; i < stats.length; i++) {
    let currentStat = stats[i]
    let currentStatValue = parseInt(currentStat.dataset.stat)
    console.log(currentStatValue)

    let counter = currentStatValue / 100

    let startValue = 0

    setInterval(() => {
      startValue = startValue + counter

      if (startValue > currentStatValue) {
        return
      }


      currentStat.textContent = `${startValue}`

    }, 10)

  }
}

export default statistics