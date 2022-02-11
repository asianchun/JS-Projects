const playButton = document.querySelector("#play-button")
const pauseButton = document.querySelector("#pause-button")
const stopButton = document.querySelector("#stop-button")
const textInput = document.querySelector("#text")
const speedInput = document.querySelector("#speed")
let currentChar

playButton.addEventListener("click", () => {
  playText(textInput.value)
})

pauseButton.addEventListener("click", pauseText)
stopButton.addEventListener("click", stopText)
speedInput.addEventListener("input", () => {
  stopText()
  playText(utterance.text.substring(currentChar))
})

const utterance = new SpeechSynthesisUtterance()
utterance.addEventListener("end", () => {
  textInput.disabled = false
})

utterance.addEventListener("boundary", (e) => {
  currentChar = e.charIndex
})

function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume()
  }

  if (speechSynthesis.speaking) return

  utterance.text = text
  utterance.rate = speedInput.value || 1
  textInput.disabled = true
  speechSynthesis.speak(utterance)
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
  speechSynthesis.resume()
  speechSynthesis.cancel()
}
