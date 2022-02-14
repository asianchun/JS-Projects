const expandButtons = document.querySelectorAll("[data-expand-button]")
const expandElements = document.querySelectorAll("[data-expandable]")

checkForOverflow()

expandButtons.forEach((button) => {
  button.addEventListener("click", toggleText)
  setExpandButtonText(button)
})

function toggleText(e) {
  const expandText = e.target.closest("[data-expandable]")
  expandText.classList.toggle("expanded")
  setExpandButtonText(e.target)
}

function setExpandButtonText(button) {
  const expandableElement = button.closest("[data-expandable]")
  const expanded = expandableElement.classList.contains("expanded")
  button.innerText = expanded ? "Read Less" : "Read More"
}

function checkForOverflow() {
  expandElements.forEach((element) => {
    if (element.classList.contains("expanded")) return
    const text = element.querySelector("[data-expand-text]")
    const overflowing = text.scrollHeight > text.clientHeight
    element.dataset.overflow = overflowing
  })
}
