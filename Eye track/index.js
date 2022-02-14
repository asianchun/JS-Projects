window.saveDataAcrossSessions = true
const LEFT_HALF = window.innerWidth / 4
const RIGHT_HALF = window.innerWidth - window.innerWidth / 4
const LOOK_DELAY = 1000
let startLookTime = Number.POSITIVE_INFINITY
let lookDirection = null
let imageElement = getNewImage()
let nextImageElement = getNewImage(true)

webgazer
  .setGazeListener((data, timestamp) => {
    if (data == null || lookDirection === "STOP") return

    if (
      data.x < LEFT_HALF &&
      lookDirection !== "LEFT" &&
      lookDirection !== "RESET"
    ) {
      startLookTime = timestamp
      lookDirection = "LEFT"
    } else if (
      data.x > RIGHT_HALF &&
      lookDirection !== "RIGHT" &&
      lookDirection !== "RESET"
    ) {
      lookDirection = "RIGHT"
      startLookTime = timestamp
    } else if (data.x >= LEFT_HALF && data.x <= RIGHT_HALF) {
      startLookTime = Number.POSITIVE_INFINITY
      lookDirection = null
    }

    if (startLookTime + LOOK_DELAY < timestamp) {
      if (lookDirection === "LEFT") {
        imageElement.classList.add("left")
      } else {
        imageElement.classList.add("right")
      }

      startLookTime = Number.POSITIVE_INFINITY
      lookDirection = "STOP"
      setTimeout(() => {
        imageElement.remove()
        nextImageElement.classList.remove("next")
        imageElement = nextImageElement
        nextImageElement = getNewImage(true)
        lookDirection = "RESET"
      }, 200)
    }
  })
  .begin()

webgazer.showVideoPreview(false).showPredictionPoints(false)

function getNewImage(next = false) {
  const img = document.createElement("img")
  img.src = "https://picsum.photos/1000?" + Math.random()
  if (next) img.classList.add("next")
  document.body.append(img)
  return img
}
