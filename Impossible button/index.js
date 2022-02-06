const button = document.querySelector(".evil-button")
const OFFSET = 100

button.addEventListener("click", () => {
  alert("Nice try")
  window.close()
})

document.addEventListener("mousemove", (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = button.getBoundingClientRect()
  const horizontalDistance = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  const verticalDistance = distanceFromCenter(buttonBox.y, y, buttonBox.height)
  const horizontalOffset = buttonBox.width / 2 + OFFSET
  const verticalOffset = buttonBox.height / 2 + OFFSET

  if (
    Math.abs(horizontalDistance) <= horizontalOffset &&
    Math.abs(verticalDistance) <= verticalOffset
  ) {
    setButtonPosition(
      buttonBox.x + (horizontalOffset / horizontalDistance) * 10,
      buttonBox.y + (verticalOffset / verticalDistance) * 10
    )
  }
})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}

function setButtonPosition(x, y) {
  const windowBox = document.body.getBoundingClientRect()
  const buttonBox = button.getBoundingClientRect()

  if (distanceFromCenter(x, windowBox.left, buttonBox.width) < 0) {
    x = windowBox.right - buttonBox.width - OFFSET
  }

  if (distanceFromCenter(x, windowBox.right, buttonBox.width) > 0) {
    x = windowBox.left + OFFSET
  }

  if (distanceFromCenter(y, windowBox.top, buttonBox.height) < 0) {
    y = windowBox.bottom - buttonBox.height - OFFSET
  }

  if (distanceFromCenter(y, windowBox.bottom, buttonBox.height) > 0) {
    y = windowBox.top + OFFSET
  }

  button.style.left = `${x}px`
  button.style.top = `${y}px`
}
