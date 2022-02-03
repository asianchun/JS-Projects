const button = document.querySelector(".swap-btn")
const body = document.querySelector("body")
const container = document.querySelector(".sun-moon-container")

button.addEventListener("click", () => {
  body.classList.toggle("dark")

  const currentRotation = parseInt(
    getComputedStyle(container).getPropertyValue("--rotation")
  )
  container.style.setProperty("--rotation", currentRotation + 180)
})
